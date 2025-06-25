// TODO:Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]]
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

const numbers = [1, 0, -1, 0, -2, 2];

const fourSum = (numbers, target) => {
  numbers.sort((a, b) => a - b);
  const ans = [];
  const n = numbers.length;

  for (let i = 0; i < n; i++) {
    if (i !== 0 && numbers[i] === numbers[i - 1]) continue;
    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && numbers[j] === numbers[j - 1]) continue;
      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        let sum = numbers[i] + numbers[j] + numbers[k] + numbers[l];
        if (sum === target) {
          ans.push([numbers[i], numbers[j], numbers[k], numbers[l]]);
          k++;
          l--;
          while (k < l && numbers[k] === numbers[k - 1]) k++;
          while (k < l && numbers[l] === numbers[l + 1]) l--;
        } else if (sum < target) {
          k++;
        } else l--;
      }
    }
  }
  return ans;
};
