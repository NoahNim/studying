var containsDuplicate = function (nums) {
  let duplis = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in duplis) {
      return true;
    } else {
      duplis[nums[i]] += 1;
    }
  }

  return false;
};
