const BubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const main = () => {
  const array = [5, 4, 3, 2, 1];
  console.log(BubbleSort(array));
};

main();
