let array = [2, 3, 5, 1, 9];
let k = 10;

// const subArray = (array, k) => {
//   let maxLen = 0;
//   let sum = 0;
//   let hashMap = new Map();

//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];

//     if (sum === k) {
//       maxLen = Math.max(maxLen, i + 1);
//     }

//     let rem = sum - k;

//     if (hashMap.has(rem)) {
//       let len = i - hashMap.get(rem);
//       maxLen = Math.max(maxLen, len);
//     }
//     if (!hashMap.has(rem)) {
//       hashMap.set(sum, i);
//     }
//   }

//   return maxLen;
// };

//TODO: another method using two-pointer
const subArray = (array, k) => {
  let left = 0;
  let right = 0;
  let sum = array[0];
  let max = 0;

  for (let i = 1; i < array.length; i++) {
    while (left <= right && sum > k) {
      sum = sum - array[left];
      left++;
    }

    if (sum === k) {
      max = Math.max(max, right - left + 1);
    }
    
    right++;
    if (right < array.length) {
      sum = sum + array[right];
    }
  }
  return max;
};

console.log(subArray(array, k));
