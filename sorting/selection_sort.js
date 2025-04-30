const selectionSort = (arr) => {
  for (let i = 0; i < arr?.length - 1; i++) {
    let mini = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[mini];
    arr[mini] = temp;
  }
  return arr;
};

const main = () => {
  const array = [5, 4, 3, 2, 1];
  console.log("array", selectionSort(array));
};

main();
