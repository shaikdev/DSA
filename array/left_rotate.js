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
  const r = k % array.length;
  if (array.length === 0) return;
  if (r > array.length) return;
  let temp = [];
  for (let i = 0; i < k; i++) {
    temp.push(array[i]);
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + r];
  }

  for (let i = array.length - r; i < array.length; i++) {
    array[i] = temp[i - array.length + r];
  }

  return array;
};

console.log(leftRotateByK([1, 2, 3, 4, 5, 6], 8));
