// Question 3
// How can we remove nodes with a specific value from a linked list, and what should be returned as the new head of the modified list? The given linked list has a head node [1,2,6,3,4,5,6] and the specified value is 6. The expected output is a modified list with nodes [1,2,3,4,5].

class ListNodeVal {
  // creates foundation of building a linked list
  constructor(value = 0, next = null) {
    this.val = value;
    this.next = next;
  }
}

function removeElements(head, value) {
  // base case, stops when head equals null
  if (head === null) {
    return null;
  }
  head.next = removeElements(head.next, value);
  return head.val === value ? head.next : head;
}

// Create the linked list
const head = new ListNodeVal(1);
head.next = new ListNodeVal(2);
head.next.next = new ListNodeVal(6);
head.next.next.next = new ListNodeVal(3);
head.next.next.next.next = new ListNodeVal(4);
head.next.next.next.next.next = new ListNodeVal(5);
head.next.next.next.next.next.next = new ListNodeVal(6);

// Remove nodes with value 6
const newVal = 6;
const newHead = removeElements(head, newVal);

// Print the modified list values
let current = newHead;
const result = [];

while (current !== null) {
  result.push(current.val);
  current = current.next;
}

console.log(result); // Output: [1, 2, 3, 4, 5]
