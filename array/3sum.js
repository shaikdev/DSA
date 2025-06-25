// TODO:Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

const numbers = [-1, 0, 1, 2, -1, -4];

const threeSum = (numbers) => {
  const ans = [];
  const n = numbers.length;
  numbers.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) continue;
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      let sum = numbers[i] + numbers[j] + numbers[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        ans.push([numbers[i], numbers[j], numbers[k]]);
        j++;
        k--;
        while (j < k && numbers[j] === numbers[j - 1]) j++;
        while (j < k && numbers[k] === numbers[k + 1]) k--;
      }
    }
  }
  return ans;
};
