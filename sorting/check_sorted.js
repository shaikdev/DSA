const arraySorted = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
};

console.log(arraySorted([1, 3, 2, 4, 5, 6]));
