const Node = require("../nodeElement");

describe("Node class", () => {
  const child = new Node();
  test("Node properties are initially null", () => {
    expect(child.value).toEqual(null);
    expect(child.nextNode).toEqual(null);
  });

  test("Node value is modified", () => {
    child.value = 1;
    expect(child.value).toEqual(1);
  });

  const newNode = new Node(0);
  test("Node next node is initally modified", () => {
    child.nextNode = newNode;
    expect(child.nextNode.value).toEqual(newNode.value);
  });
});
