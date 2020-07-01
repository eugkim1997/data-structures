var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var n = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[n] = value;
    n++;
  };

  someInstance.pop = function() {
    if (n > 0) {
      n -= 1;
      var result = storage[n];
      delete storage[n]
      return result;
    }
  };

  someInstance.size = function() {
    return n;
  };

  return someInstance;
};
