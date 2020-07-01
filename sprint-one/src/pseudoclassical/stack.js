var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.n = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.n] = value;
  this.n++;
};

Stack.prototype.pop = function() {
  if (this.n > 0) {
    this.n--;
    var result = this.storage[this.n];
    delete this.storage[this.n];
    return result;
  }
};

Stack.prototype.size = function() {
  return this.n;
}


