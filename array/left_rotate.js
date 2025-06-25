const array = [1, 2, 3, 4, 5];

const leftRotateOnePlace = (array) => {
  const firstValue = array[0];
  for (let i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }
  array[array.length - 1] = firstValue;
  return array;
};

// console.log(leftRotateOnePlace(array));

// array left rotate by k
const leftRotateByK = (array, k) => {
  if (array.length === 0) return array;

  const r = k % array.length;
  if (r === 0) return array;

  const temp = array.slice(0, r); // store first r elements

  for (let i = r; i < array.length; i++) {
    array[i - r] = array[i]; // shift elements to the left
  }

  for (let i = array.length - r; i < array.length; i++) {
    array[i] = temp[i - array.length + r]; // append stored elements
  }

  return array;
};

const rightRotate = (nums, k) => {
  let r = k % nums.length;
  if (r === 0) return nums;
  if (nums.length === 0) return nums;
  let temp = nums.slice(-r);
  for (let i = nums.length - r - 1; i >= 0; i--) {
    nums[i + r] = nums[i];
  }
  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }
  return nums
};

console.log(rightRotate([1, 2, 3, 4, 5, 6, 7], 3));
