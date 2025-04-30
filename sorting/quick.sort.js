const array = [3,1,2];

const partition = (array, low, high) => {
  const pivot = array[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (array[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (array[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) [array[i], array[j]] = [array[j], array[i]];
  }

  [array[low], array[j]] = [array[j], array[low]];
  return j;
};

const quickSort = (array, low, high) => {
  if (low < high) {
    const partitionIndex = partition(array, low, high);
    quickSort(array, low, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, high);
  }
};

const func = (array) => {
  quickSort(array, 0, array?.length - 1);
  return array;
};

console.log(func(array));
