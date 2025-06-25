// TODO:Input : N = 5, array[] = {1, 2, -2, 4, -4}
// Output : 4

const array = [1, 2, -2, 4, -4];

const subArrayWithZero = (array) => {
  let hashMap = new Map();
  let maxi = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    if (sum === 0) {
      maxi++;
    } else {
      if (hashMap.has(sum)) {
        maxi = Math.max(maxi, i - hashMap.get(sum));
      } else hashMap.set(sum, i);
    }
  }
  return maxi;
};

console.log(subArrayWithZero(array));
