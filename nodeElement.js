function Node(value, nextNode) {
  if (arguments.length == 0) {
    this.value = null;
    this.nextNode = null;
  } else if (value && !nextNode) {
    this.value = value;
  } else {
    this.value = value;
    this.nextNode = nextNode;
  }
}

Node.prototype.value = function (value) {
  this.value = value;
};

Node.prototype.nextNode = function (nextNode) {
  this.nextNode = nextNode;
};

module.exports = Node;
