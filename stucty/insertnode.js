class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }


const insertNode = (head, value, index) => {
    let count = 0;
    let current = head;
    
    if (index === 0) {
      const newHead = new Node(value);
      newHead.next = head;
      return newHead;
    }
    
    while (current !== null) {
      if (count === index - 1) {
        const temp = current.next;
        current.next = new Node(value);
        current.next.next = temp;
        break;
      }
      current = current.next;
      count++;
    }
    
    return head;
  };
  