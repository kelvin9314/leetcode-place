// Method using javascript Map object
// Runtime: 188 ms
class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if(!this.cache.has(key)) return -1

    const val = this.cache.get(key)
    // Javascript Map object is ordered
    this.cache.delete(key)
    this.cache.set(key, val)
    return this.cache.get(key)

  };

  put(key, value) {
    if(this.cache.has(key)) this.cache.delete(key)
    this.cache.set(key, value)
    // Map 是用 size
    if(this.cache.size > this.capacity) this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
  };
}
