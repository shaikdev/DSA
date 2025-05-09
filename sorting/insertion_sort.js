const insertionSort = (array) => {
  for (let i = 0; i <= array.length - 1; i++) {
    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
  }
  return array;
};

console.log(insertionSort([5, 4, 3, 2, 1]));
