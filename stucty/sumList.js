// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// make a variable called sum set to zero
// make a vartiable called current = head
// while current != null add current.val to sum
// set current to current.net after each addition to sum
// return sum

const sumList = (head) => {
    let sum = 0;
    let current = head;
    
    while (current != null) {
      sum += current.val;
      current = current.next;
    }
    return sum;
  };
  