function node() {
  this.value = null;
  this.nextNode = null;
}

node.prototype.value = function (value) {
  this.value = value;
};

node.prototype.nextNode = function (nextNode) {
  this.nextNode = nextNode;
};

module.exports = node;
