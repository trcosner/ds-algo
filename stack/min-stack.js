class LinkedListNode {
  constructor(val, next = null) {
    this.id = Math.floor(Math.random() * 100);
    this.next = next || null;
    this.value = val;
    this.min_so_far = this.min_so_far = next
      ? Math.min(val, next.min_so_far)
      : val;
  }
}

class MinStack {
  constructor() {
    this.top_node;
    this.min = 5;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    const node = new LinkedListNode(val, this.top_node);
    this.top_node = node;
  }

  /**
   * @return {void}
   */
  pop() {
    if (!this.top_node) {
      return;
    }
    const next_top = this.top_node.next;
    this.top_node = next_top;
  }

  /**
   * @return {number}
   */
  top() {
    return this.top_node.value;
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.top_node.min_so_far;
  }
}
