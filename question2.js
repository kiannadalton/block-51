// Question 2
// Reverse the given singly linked list by manipulating its head and return the reversed list. The input is head = [1,2,3,4,5] and the expected output is [5,4,3,2,1]. 


class ListNodeVal {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseGivenList(head, prev = null) {
  if (head === null) {
    return prev;
  }
  const nextNode = head.next;
  head.next = prev;
  return reverseGivenList(nextNode, head);
}

// Create the linked list
const head = new ListNodeVal(1);
head.next = new ListNodeVal(2);
head.next.next = new ListNodeVal(3);
head.next.next.next = new ListNodeVal(4);
head.next.next.next.next = new ListNodeVal(5);

// Reverse the linked list
const reversedList = reverseGivenList(head);

// Print the reversed list values
let currVal = reversedList;
const result = [];

while (currVal !== null) {
  result.push(currVal.val);
  currVal = currVal.next;
}

console.log(result); // Output: [5, 4, 3, 2, 1]