const Node = require("./Node");

function LinkedList() {
  this.array = [];
  this.head = null;
  this.tail = null;
  return array;
}

linkedList.prototype.head = function () {
  return this.head;
};

linkedList.prototype.tail = function () {
  return this.tail;
};

linkedList.prototype.append = function (value) {
  // add new node to tail and push with value in!
  const node = new this.array.push(value);
  this.tail = value;
  return;
};

linkedList.prototype.prepend = function (value) {
  //add new head
  const node = new node();
  node.value = value;
  node.nextNode = this.head;
  this.array = [node].concat(this.array);

  //update head
  this.head = node;
  return;
};

linkedList.prototype.size = function () {
  return this.array.length;
};

linkedList.prototype.at = function (index) {
  return this.array[index].value;
};

module.exports = LinkedList;
