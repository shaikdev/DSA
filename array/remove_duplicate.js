const removeDuplicates = (array) => {
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
};

const array = [1, 2, 3, 3, 4, 4, 5, 6, 7, 7, 8];
const k = removeDuplicates(array);

const print = (k, array) => {
  for (let i = 0; i < k; i++) {
    console.log(array[i]);
  }
};

console.log(print(k, array));
