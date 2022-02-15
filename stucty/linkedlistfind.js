// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// set variable called current
// while current != null check if current.val = target and return true if so
// make current = current.next after the check
// if the loop ends return false

const linkedListFind = (head, target) => {
    let current = head;
    
    while (current != null) {
      if (current.val === target) return true;
      current = current.next;
    }
    
    return false;
  };
  
  