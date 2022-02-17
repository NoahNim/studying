const longestStreak = (head) => {
    let maxStreak = 0;
    let currentStreak = 0;
    let current = head;
    let prevValue = null;
    
    while (current !== null) {
      if (current.val === prevValue) {
        currentStreak++;
       }
      else {
        currentStreak = 1;
      }
      
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
      }
      
      prevValue = current.val;
      current = current.next;
    }
    
    return maxStreak;
  };
  