// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// make a current = head and a previous = null and next = current.next
// while current != null
// make current.next point to previous
// make previous = current
// then make current = next
// then you can return previous

const reverseList = (head) => {
    let current = head;
    let previous = null;
    
    while (current != null) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;      
    }
    
    return previous;
  };
  
  
  
  