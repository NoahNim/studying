const uncompress = (s) => {
  const numbers = '0123456789'
  let result = [];
  let i = 0;
  let j = 0;
  
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j++;
    }
    else {
      const num = s.slice(i, j);
      for (let count = 0; count < num; count++){
        result.push(s[j])
      }
      j++;
      i = j;
    }
  }
  
  return result.join('');
};