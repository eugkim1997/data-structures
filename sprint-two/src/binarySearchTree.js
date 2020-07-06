var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  _.extend(newTree, binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  if (this.value > value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    }
    this.left.insert(value);
  } else if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    }
    this.right.insert(value);
  }
};

binaryTreeMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  if (this.value > value && this.left !== null) {
    return this.left.contains(value);
  } else if (this.value < value && this.right !== null) {
    return this.right.contains(value);
  }
  return false;
};

binaryTreeMethods.depthFirstLog = function(fn) {
  fn(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(fn);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(fn);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */