var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.n = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.n] = value;
  this.n++;
};

stackMethods.pop = function() {
  if (this.n > 0) {
    this.n--;
    var result = this.storage[this.n];
    delete this.storage[this.n];
    return result;
  }
};

stackMethods.size = function() {
  return this.n;
};