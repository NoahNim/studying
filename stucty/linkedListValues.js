const linkedListValues = (head) => {
    let valray = [];
    let current= head;
    
    while (current != null){
      valray.push(current.val);
      current = current.next;
    }
    return valray;
  };