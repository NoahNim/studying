var twoSum = function (nums, target) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i] + ' NUMS AT I')
        for (let j = 0; j < nums.length; j++) {
            console.log(nums[j] + ' NUMS AT J')
            // console.log(nums[i] !== nums[j])
            if (i !== j) {
                sum = nums[i] + nums[j]
                console.log(sum + ' THE CURRENT SUM');
                if (sum === target) return [i, j];
            }
        }
    }
};

console.log(twoSum([2, 5, 5, 11], 10));