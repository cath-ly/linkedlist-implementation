function Node() {
  this.value = null;
  this.nextNode = null;
}

Node.prototype.value = function (value) {
  this.value = value;
};

Node.prototype.nextNode = function (nextNode) {
  this.nextNode = nextNode;
};

module.exports = Node;
