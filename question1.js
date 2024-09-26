// Question 1
// Merge the two sorted linked lists linked_list1 and linked_list2 into a single sorted list. Create the merged list by splicing together the nodes of the first two lists. Return the head of the resulting merged linked list.

// The input will be linked_list1 = [1,2,4] and linked_list2 = [1,3,4], and the expected output is [1,1,2,3,4,4].

class ListNodeVal {
  // starts the lists
  constructor(value = 0, next = null) {
    this.val = value;
    this.next = next;
  }
}

// merges the lists
function mergeTwoLists(list1, list2) {
  // Base cases
  //   if list 1 is null, return list 2
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  } else if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
  }
}

// Create the linked lists
const list1 = new ListNodeVal(1);
list1.next = new ListNodeVal(2);
list1.next.next = new ListNodeVal(4);

const list2 = new ListNodeVal(1);
list2.next = new ListNodeVal(3);
list2.next.next = new ListNodeVal(4);

// Merge the linked lists
const mergedList = mergeTwoLists(list1, list2);

// Print the merged list values
let current = mergedList;
const mergeListValuesResult = [];

while (curr !== null) {
  mergeListValuesResult.push(current.val);
  current = current.next;
}

console.log(mergeListValuesResult); // Output: [1, 1, 2, 3, 4, 4]
