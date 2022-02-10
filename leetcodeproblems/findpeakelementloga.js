var findPeakElement = function (nums) {

    let peak = 0;
    let start = 0;
    let end = nums.length - 1;

    if (nums.length > 2) {
        while (start <= end) {
            let middle = Math.floor((start + end / 2))
            middleEle = nums[middle];
            if (nums[middle] > nums[middle + 1] && nums[middle - 1] < nums[middle]) {
                peak = middle;
                return middle;
            }
            else if (nums[middle + 1] > nums[middle] && nums[middle + 2] < nums[middle + 1]) {
                peak = middle + 1;
                return peak;
            }
            else if (nums[middle] < nums[peak]) {
                start += 1;
            }
            else {
                end -= 1;
            }
        }
    }
    else if (nums.length === 2) {
        if (nums[0] > nums[1]) {
            return peak;
        }
        else if (nums[1] > nums[0]) {
            peak = 1;
            return peak;
        } 
    }
    if (nums.length === 1) {
        return 0;
    }
};

console.log(findPeakElement([1, 2, 3, 1]))
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))
console.log(findPeakElement([1, 2, 3, 1]))
console.log(findPeakElement([1, 2]))
console.log(findPeakElement([1]))
console.log(findPeakElement([[3, 2, 1]]))