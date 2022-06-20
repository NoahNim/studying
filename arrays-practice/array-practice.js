const findMinimum = (arr) => {
  let min = arr[arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      arr.pop();
    }
  }
  return min;
};

const runningSum = (arr) => {
  // Your code here
};

const evenNumOfChars = (arr) => {
  // Your code here
};

const smallerThanCurr = (arr) => {
  // Your code here
};

const twoSum = (arr, target) => {
  // Your code here
};

const secondLargest = (arr) => {
  // Your code here
};

const shuffle = (arr) => {
  // Your code here
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
