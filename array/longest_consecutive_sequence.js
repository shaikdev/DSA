const array = [1, 2, 5, 6, 8, 9, 10];

const longestConsecutiveSequence = (array) => {
  let max = 1;
  const n = array.length;
  const newSet = new Set();

  for (let i = 0; i < n; i++) {
    newSet.add(array[i]);
  }
  //   iterate set
  for (let data of newSet) {
    if (!newSet.has(data - 1)) {
      let count = 1;
      let num = data;
      while (newSet.has(num + 1)) {
        count++;
        num = num + 1;
      }
      max = Math.max(max, count);
    }
  }

  return max;
};

console.log(longestConsecutiveSequence(array));
