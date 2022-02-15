// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// make a variable called current
// make a variable called counter
// while current != null check if count === index and return current.val
// otherwise increment count by 1 and make current = current.next
// return null if no node at index

const getNodeValue = (head, index) => {
    let current = head;
    let counter = 0;
    
    while (current !== null) {
      if (counter === index) return current.val;
      counter++;
      current = current.next;
    }
    
    return null;
  };
  