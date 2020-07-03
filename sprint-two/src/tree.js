var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if(this.value === target){
    return true;
  }
  for(var i = 0; i < this.children.length; i++){
    var result = this.children[i].contains(target);
    if (result) {
      return result;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
