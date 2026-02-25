const Node = require("./nodeElement");

function LinkedList() {
  this.array = [];
  this.headNode = null;
  this.tailNode = null;
}

LinkedList.prototype.append = function (value) {
  // add new node to tail and push with value in!
  const node = new Node(value);
  this.array.push(node);

  //update head & tail (if needed) note: tailNode since appended has a null node for nextNode
  temp = this.tailNode;
  this.tailNode = node;
  if (this.array.length === 1) this.tailNode = node;
  else {
    temp.nextNode = node;
    node.nextNode = null;
  }
  return;
};

LinkedList.prototype.prepend = function (value) {
  //add new head
  const node = new Node(value);
  node.nextNode = this.headNode;
  this.array = [node].concat(this.array);

  //update head & tail (if needed)
  if (this.array.length === 1) this.tailNode = node;
  this.headNode = node;
};

LinkedList.prototype.size = function () {
  return this.array.length;
};

LinkedList.prototype.head = function () {
  return this.headNode;
};

LinkedList.prototype.tail = function () {
  return this.tailNode;
};

LinkedList.prototype.at = function (index) {
  if (index >= this.array.length || index < 0) return;
  return this.array[index].value;
};

LinkedList.prototype.pop = function () {
  // what about tail if element is 2 or less?
  if (this.array.length === 0) return;
  const temp = this.array.shift();
  this.headNode = temp.next;
  if (this.array.length == 1) {
    this.tailNode = this.headNode;
  }
  return temp.value;
};

LinkedList.prototype.contains = function (value) {
  for (const node of this.array) {
    if (value == node.value) return true;
  }
  return false;
};

LinkedList.prototype.findIndex = function (value) {
  for (let i = 0; i < this.array.length; i++) {
    const node = this.array[i];
    if (value == node.value) return i;
  }
  return -1;
};

LinkedList.prototype.toString = function () {
  var stringOfLinkedList = "";
  if (!this.array) return "";
  for (const node of this.array) {
    stringOfLinkedList = stringOfLinkedList.concat(
      "( " + node.value + " )" + " => ",
    );
  }
  // easy alternative but what about using the nodes nextValue
  stringOfLinkedList = stringOfLinkedList.concat("null");
  return stringOfLinkedList;
};

module.exports = LinkedList;
