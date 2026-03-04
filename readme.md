Project given by TheOdinProject:

Challenges:

- Jest was having compiling issues with my Node object and I could not run tests unless I renamed the Node class to nodeElement or anything outside of "N(n)ode"
  - when running npm test/npm jest the command immediately ends after executing command without checking any test suites.

What I learned:

- I learned that dummynodes are not neccessarily required to be in LinkedList data structure but it makes the implementation ALOT easier if you are replacing/modifying nodes around the head.
- Linked List is a vital data structure that helps access objects easier and makes modifying/adding objects in a O(1) runtime.

- Craft a Linked List that:
  - append(value) adds a new node containing value to the end of the list. (Completed 2/24/26)
  - prepend(value) adds a new node containing value to the start of the list. (Completed 2/24/26)
  - size() returns the total number of nodes in the list. (Completed 2/24/26)
  - head() should return the value of the first node in the list. If the list is empty, it should return undefined. (Completed 2/23/26)
  - tail() should return the value of the final node in the list. If the list is empty, it should return undefined. (Completed 2/23/26)
  - at(index) should return the value of the node at the given index. If there’s no node at the given index, it should return undefined. (Completed 2/25/26)
  - pop() should remove the head node from the list and return its value. If it’s used on an empty list, it should just return undefined. (Completed 2/26/26)
  - contains(value) returns true if the passed in value is in the list and otherwise returns false. (Completed 2/25/26)
  - findIndex(value) returns the index of the node containing the given value. If the value can’t be found in the list, it should return -1. If more than one node has a value matching the given value, it should return the index of the first node with the matching value. (Completed 2/25/26)
  - toString() represents your LinkedList structure as strings, so you can print them out and preview them in the console. If the list is empty, it should return an empty string. The format should be: ( value ) -> ( value ) -> ( value ) -> null. (Completed 3/2/26)
