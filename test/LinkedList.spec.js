const LinkedList = require("../LinkedList");

describe("Linked List class", () => {
  const list = new LinkedList();
  test("Linked List initialized as null", () => {
    expect(list.headNode).toBe(null);
    expect(list.tailNode).toBe(null);
    expect(list.array).toEqual([]);

    expect(list.head()).toBe(null);
    expect(list.tail()).toBe(null);
    expect(list.size()).toBe(0);
    expect(list.toString()).toEqual("null");
  });

  test("Linked List methods are functional", () => {});
});
