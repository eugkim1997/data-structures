

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tupleCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  //todo: call resize if above 75%
  if (this._tupleCount / this._limit >= 0.75) {
    this.resize(true);
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index) === undefined){
    this._storage.set(index, []);
  }
  var bucket = this._storage.get(index);
  var found = false;
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){
      bucket[i][1] = v;
      found = true;
      return;
    }
  }
  if(!found){
    bucket.push([k, v]);
    this._tupleCount++;
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if( bucket === undefined ){
    return;
  }
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  //todo: call resize if below 25%
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if( bucket === undefined ){
    return;
  }
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._tupleCount--;
    }
  }
  //debugger;
  //console.log("tupleCount" + this._tupleCount);
  //console.log("limit" + this._limit);
  //console.log(k);
  if (this._tupleCount / this._limit < 0.25) {
    this.resize(false);
  }
};

HashTable.prototype.resize = function(input) {
  //limit will double in size when sapce usage > 75% and halve when space usage < 25%
  //create new storage and copy over values from old storage
  var newLimit = 0;
  if (input === true){
    newLimit = this._limit * 2;
  } else if (input === false) {
    newLimit = this._limit * 0.5;
  }
  var newLimitedArray = LimitedArray(newLimit);
  for(var i = 0; i < this._limit; i++) {
    if (this._storage.get(i)) {
      for(var j = 0; j < this._storage.get(i).length; j++){
        var index = getIndexBelowMaxForKey(this._storage.get(i)[j][0], newLimit);
        console.log(this._storage.get(i)[j][0], index);
        if(newLimitedArray.get(index) === undefined){
          newLimitedArray.set(index, []);
        }
        var bucket = newLimitedArray.get(index);
        bucket.push([this._storage.get(i)[j][0], this._storage.get(i)[j][1]]);
      }
    }
  }
  this._limit = newLimit;
  this._storage = newLimitedArray;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


