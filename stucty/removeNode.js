// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// set pointer called current and previous
// while current != null 

const removeNode = (head, targetVal) => {
    if (head.val === targetVal) {
      head = head.next;
    }
    
    let current = head;
    let previous = null;
    
    while (current !== null) {
      if (current.val === targetVal) {
        previous.next = current.next;
        break;
      }
      previous = current;
      current = current.next;
    }
    
    return head;
  };
  