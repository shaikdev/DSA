// TODO: Merge Sort

const array = [3,4,2,1];

const mergeSort = (array, low, mid, high) => {
  let left = low,
    right = mid + 1;
  let temp = [];

  while (left <= mid && right <= high) {
    if (array[left] <= array[right]) {
      temp.push(array[left]);
      left++;
    } else {
      temp.push(array[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(array[left]);
    left++;
  }
  while (right <= high) {
    temp.push(array[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    array[i] = temp[i - low];
  }
  return;
};

const ms = (array, low, high) => {
  if (low >= high) return;
  const mid = Math.floor((low + high) / 2);
  ms(array, low, mid);
  ms(array, mid + 1, high);
  mergeSort(array, low, mid, high);
};

const func = (array) => {
  ms(array, 0, array?.length - 1);
  return array;
};

console.log(func(array));
