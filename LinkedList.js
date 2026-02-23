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
  this.tailNode = node;
  return;
};

LinkedList.prototype.prepend = function (value) {
  //add new head
  const node = new Node();
  node.value = value;
  node.nextNode = this.headNode;
  this.array = [node].concat(this.array);

  //update head
  this.headNode = node;
  return;
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
  return this.array[index].value;
};

LinkedList.prototype.pop = function () {
  // what about tail if element is 2 or less?
  if (!this.array) {
    return;
  }
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
  stringOfLinkedList = stringOfLinkedList.concat("null");
  return stringOfLinkedList;
};

module.exports = LinkedList;
