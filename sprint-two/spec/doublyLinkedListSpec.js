describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });


  it('node should have next and previous properties', function() {
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head).to.have.property('next');
    expect(doublyLinkedList.head).to.have.property('previous');
  });

  it('should designate a new tail when new nodes are added to the tail', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when new nodes are added to the head', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should correctly assign tail\'s new next and previous properties', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.previous.value).to.equal(4);
    expect(doublyLinkedList.tail.next).to.equal(null);
  });

  it('should correctly assign head\'s new next and previous properties', function() {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.next.value).to.equal(4);
    expect(doublyLinkedList.head.previous).to.equal(null);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeTail()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  it('should return null when trying to remove the head of an empty list', function() {
    expect(doublyLinkedList.removeHead()).to.equal(null);
  });

  // add more tests here to test the functionality of linkedList
});
