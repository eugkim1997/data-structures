var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = DoublyNode(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      newNode.previous = list.tail;
      list.tail = newNode;
    }
  };

  list.addToHead = function(value) {
    var newNode = DoublyNode(value);
    if(!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.previous = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }
  }

  list.removeTail = function() {
    if (list.tail !== null) {
      var result = list.tail.value;
      list.tail = list.tail.previous;
      if (list.tail !== null) {
        list.tail.next = null;
      }
    } else {
      result = null;
    }
    return result;
  }

  list.removeHead = function() {
    if(list.head !== null){
      var result = list.head.value;
      list.head = list.head.next;
      if (list.head !== null) {
        list.head.previous = null;
      }
    } else{
      result = null;
    }
    return result;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode != null) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };
  return list;
};

var DoublyNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
