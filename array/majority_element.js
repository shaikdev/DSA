// //TODO:Input: nums = [3,2,3]
// Output: [3]

const numbers = [3, 2, 3];

const majorityElement = (nums) => {
  let count1 = 0;
  let count2 = 0;
  let elem1 = -Infinity;
  let elem2 = -Infinity;
  let list = [];

  for (let i = 0; i < nums.length; i++) {
    if (count1 === 0 && elem2 !== nums[i]) {
      count1++;
      elem1 = nums[i];
    } else if (count2 === 0 && elem1 !== nums[i]) {
      count2++;
      elem2 = nums[i];
    } else if (elem1 === nums[i]) {
      count1++;
    } else if (elem2 === nums[i]) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  count1 = 0;
  count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (elem1 === nums[i]) count1++;
    if (elem2 === nums[i]) count2++;
  }
  const mini = Math.floor(nums.length / 3) + 1;
  if (count1 >= mini) list.push(elem1);
  if (count2 >= mini) list.push(elem2);
  return list;
};

console.log(majorityElement(numbers));
