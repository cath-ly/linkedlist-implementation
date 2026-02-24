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

  test("Linked List append and prepend methods are functional", () => {
    const head = 1;
    const tail = 0;

    list.prepend(head);
    expect(list.head().value).toBe(head);
    expect(list.tail().value).toBe(head);
    expect(list.size()).toEqual(1);

    list.append(tail);
    expect(list.head().value).toBe(head);
    expect(list.tail().value).toBe(tail);
    expect(list.size()).toEqual(2);
  });
});
