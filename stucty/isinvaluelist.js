// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueList = (head) => {
    let current = head;
    
    while (current !== null) {
      if (current.val !== head.val) return false
      current = current.next;
    }
    
    return true;
  };
  
  