const Node = require("./Node");

function LinkedList() {
  this.array = [];
  this.head = null;
  this.tail = null;
  return array;
}

linkedList.prototype.append = function (value) {
  // add new node to tail and push with value in!
  const node = new this.array.push(value);
  this.tail = value;
  return;
};

linkedList.prototype.prepend = function (value) {
  //add new head
  const node = new Node();
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

linkedList.prototype.head = function () {
  return this.head;
};

linkedList.prototype.tail = function () {
  return this.tail;
};

linkedList.prototype.at = function (index) {
  return this.array[index].value;
};

linkedList.prototype.pop = function () {
  // what about tail if element is 2 or less?
  if (!this.array) {
    return;
  }
  const temp = this.array.shift();
  this.head = temp.next;
  if (this.array.length == 1) {
    this.tail = this.head;
  }
  return temp.value;
};

linkedList.prototype.contains = function (value) {
  for (const node of this.array) {
    if (value == node.value) return true;
  }
  return false;
};

linkedList.prototype.findIndex = function (value) {
  for (let i = 0; i < this.array.length; i++) {
    const node = this.array[i];
    if (value == node.value) return i;
  }
  return -1;
};

linkedList.prototype.toString() = function (){
  const stringOfLinkedList = ""
  if (!this.array) return stringOfLinkedList;
  for (const node of this.array) {
    stringOfLinkedList = stringOfLinkedList.concat("( " + node.value + " )" + " => ")
  }
  stringOfLinkedList = stringOfLinkedList.concat("null");
  return stringOfLinkedList;
}

module.exports = LinkedList;