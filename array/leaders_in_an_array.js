const array = [10, 22, 12, 3, 0, 6];

const leadersInArray = (array) => {
  let max = -Infinity;
  let ans = [];

  for (i = array.length - 1; i >= 0; i--) {
    if (array[i] > max) {
      ans.push(array[i]);
      max = Math.max(array[i], max);
    }
  }
  return ans.reverse();
};

console.log(leadersInArray(array));
