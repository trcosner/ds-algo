class LRUCache {
  /**
   * @param {number} capacity
   * @param {number|null} ttlMs  default TTL for entries; null disables TTL
   */
  constructor(capacity, ttlMs = null) {
    if (capacity <= 0) throw new Error("capacity must be > 0");
    this.capacity = capacity;
    this.ttlMs = ttlMs;
    this.map = new Map(); // key -> { value, expiresAt|null }
  }

  _isExpired(entry, now) {
    return entry.expiresAt != null && now >= entry.expiresAt;
  }

  get(key) {
    if (!this.map.has(key)) return -1;

    const now = Date.now();
    const entry = this.map.get(key);

    if (this._isExpired(entry, now)) {
      this.map.delete(key);
      return -1;
    }

    // refresh MRU by reinserting
    this.map.delete(key);
    this.map.set(key, entry);
    return entry.value;
  }

  /**
   * Optional 3rd arg to override TTL for this write
   */
  put(key, value, ttlOverrideMs = undefined) {
    const now = Date.now();
    const ttl = (ttlOverrideMs !== undefined) ? ttlOverrideMs : this.ttlMs;
    const expiresAt = (ttl != null) ? now + ttl : null;

    if (this.map.has(key)) {
      // update + refresh MRU
      const entry = this.map.get(key);
      entry.value = value;
      entry.expiresAt = expiresAt;
      this.map.delete(key);
      this.map.set(key, entry);
      return;
    }

    // prune any expired items at the head (cheap hygiene)
    this._pruneExpiredFromHead(now);

    // evict LRU if at capacity
    if (this.map.size >= this.capacity) {
      const oldestKey = this.map.keys().next().value; // first = oldest
      this.map.delete(oldestKey);
    }

    this.map.set(key, { value, expiresAt });
  }

  _pruneExpiredFromHead(now) {
    // remove a run of expired items from the front
    while (this.map.size > 0) {
      const oldestKey = this.map.keys().next().value;
      const oldestEntry = this.map.get(oldestKey);
      if (!this._isExpired(oldestEntry, now)) break;
      this.map.delete(oldestKey);
    }
  }
}
