class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.n = 0;
  }

  push(value) {
    this.storage[this.n] = value;
    this.n++;
  }

  pop() {
    if (this.n > 0) {
      this.n--;
      var result = this.storage[this.n];
      delete this.storage[this.n];
      return result;
    }
  }

  size() {
    return this.n;
  }

}