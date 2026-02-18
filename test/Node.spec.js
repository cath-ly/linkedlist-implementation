const node = require("../nodeElement");

describe("Node class", () => {
  const child = new node();
  test("Node properties are initially null", () => {
    expect(child.value).toEqual(null);
    expect(child.nextNode).toEqual(null);
  });
});
