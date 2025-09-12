class LRUCache {
  /**
   * @param {number} capacity
   * @param {{ ttlMs?: number|null }} opts - default TTL for entries (null = no TTL)
   */
  constructor(capacity, { ttlMs = null } = {}) {
    this.capacity = capacity
    this.ttlMs = ttlMs
    this.head = null  // LRU
    this.tail = null  // MRU
    this.map = new Map() // key -> node
  }

  static Node = class{
    constructor(key, value, nextNode = null, prevNode = null, expiresAt = null){
      this.key = key
      this.value = value
      this.nextNode = nextNode
      this.prevNode = prevNode
      this.expiresAt = expiresAt // ms since epoch, or null
    }
  }

  get(key) {
    const node = this.map.get(key)
    if (!node) return -1

    const now = Date.now()
    if (this._isExpired(node, now)) {
      this._removeNode(node)
      this.map.delete(node.key)
      return -1
    }

    this._moveToTail(node) // refresh recency
    return node.value
  }

  /**
   * Optional 3rd arg lets you override TTL for this write only.
   * put(k, v, 5000) => expires 5s from now (ignores default ttlMs for this call)
   */
  put(key, value, ttlOverrideMs = undefined) {
    const now = Date.now()
    const ttl = (ttlOverrideMs !== undefined ? ttlOverrideMs : this.ttlMs)
    const expiresAt = (ttl != null ? now + ttl : null)

    const existing = this.map.get(key)
    if (!this.head) {
      // first insert
      const node = new LRUCache.Node(key, value, null, null, expiresAt)
      this.map.set(key, node)
      this.head = node
      this.tail = node
    } else if (existing) {
      // if expired, treat as fresh insert
      if (this._isExpired(existing, now)) {
        this._removeNode(existing)
        this.map.delete(existing.key)
        this._insertNewAtTail(key, value, expiresAt)
      } else {
        existing.value = value
        existing.expiresAt = expiresAt
        this._moveToTail(existing)
      }
    } else {
      // append new as MRU
      this._insertNewAtTail(key, value, expiresAt)
    }

    // Cheap eager prune from head before LRU capacity trim
    this._pruneExpiredFromHead(now)

    // LRU capacity eviction
    while (this.map.size > this.capacity) {
      if (!this.head) break
      const victim = this.head
      this._removeNode(victim)
      this.map.delete(victim.key)
    }
  }

  // ----- internals -----

  _isExpired(node, now) {
    return node.expiresAt != null && now >= node.expiresAt
  }

  _insertNewAtTail(key, value, expiresAt) {
    const oldTail = this.tail
    const node = new LRUCache.Node(key, value, null, oldTail, expiresAt)
    if (oldTail) oldTail.nextNode = node
    this.tail = node
    if (!this.head) this.head = node
    this.map.set(key, node)
  }

  _removeNode(node) {
    if (node.prevNode) node.prevNode.nextNode = node.nextNode
    else this.head = node.nextNode

    if (node.nextNode) node.nextNode.prevNode = node.prevNode
    else this.tail = node.prevNode

    node.nextNode = node.prevNode = null
  }

  _moveToTail(node) {
    if (node === this.tail) return

    // detach
    if (node.prevNode) node.prevNode.nextNode = node.nextNode
    else this.head = node.nextNode

    if (node.nextNode) node.nextNode.prevNode = node.prevNode

    // append
    node.prevNode = this.tail
    node.nextNode = null
    if (this.tail) this.tail.nextNode = node
    this.tail = node

    if (!this.head) this.head = node // safety
  }

  _pruneExpiredFromHead(now) {
    while (this.head && this._isExpired(this.head, now)) {
      const victim = this.head
      this._removeNode(victim)
      this.map.delete(victim.key)
    }
  }
}
