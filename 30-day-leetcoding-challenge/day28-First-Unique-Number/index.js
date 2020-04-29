class FirstUnique {
  constructor(nums) {
    this.queue = [];
    this.uniqueQueue = new Map();

    for (let i = 0; i < nums.length; i++) {
      let value = nums[i];
      if (this.uniqueQueue.has(value)) {
        this.uniqueQueue.delete(value);
      } else {
        if (!this.queue.includes(value)) {
          this.uniqueQueue.set(value);
          this.queue.push(value);
        }
      }
    }
  }

  add(value) {
    if (this.uniqueQueue.has(value)) {
      this.uniqueQueue.delete(value);
    } else {
      if (!this.queue.includes(value)) {
        this.uniqueQueue.set(value);
        this.queue.push(value);
      }
    }
  }

  showFirstUnique() {
    return this.uniqueQueue.keys().next().value || -1;
  }
}
