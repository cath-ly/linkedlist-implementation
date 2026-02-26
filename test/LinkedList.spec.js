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

  test("Linked List at, contains, and findIndex methods are functional", () => {
    expect(list.at(1)).toBe(list.tail().value);
    expect(list.at(2)).toBe(undefined);

    expect(list.contains(0)).toBe(true);
    expect(list.contains(3)).toBe(false);

    expect(list.findIndex(0)).toEqual(1);
    expect(list.findIndex(2)).toEqual(-1);
  });

  test("Linked List pop method is functional", () => {
    console.log(list.head(), list.tail());
    const node = list.pop();
    expect(node.value).toBe(1);

    console.log(list.head(), list.tail());
    expect(list.size()).toBe(1);
    expect(list.head().value).toBe(0);
    expect(list.tail().value).toBe(0);

    list.pop();
    const noNode = list.pop();
    expect(noNode).toBe(undefined);
  });
});
