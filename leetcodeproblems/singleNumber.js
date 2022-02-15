// make a hashMap numsMap
// if the hashMap does not have nums[i] put it in the map with a value of 1
// if it already has nums[i] increase the value by 1
// loop through numsMap and return the key with the value of 1

var singleNumber = function(nums) {
    let numsMap = {}
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] in numsMap) {
            numsMap[nums[i]] += 1;
        }
        else {
            numsMap[nums[i]] = 1;
        }
    }
    
    for (key in numsMap) {
        if (numsMap[key] === 1) {
            return key
        }
    }
};