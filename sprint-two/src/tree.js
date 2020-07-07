var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
  child.parent = this;
};

treeMethods.removeFromParent = function() {
  if(this.parent !== null){
    var children = this.parent.children;
    function childPicker(value){
      for(var i = 0; i < children.length; i++){
        if (value === children[i].value) {
          return i;
        }
      }
    }
    children.splice(childPicker(this.value), 1);
    this.parent = null;
  }
}

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
