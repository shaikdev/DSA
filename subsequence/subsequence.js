const array = [1, 2, 3];

const subsequence = (array, store, index, n) => {
  if (index >= n) {
    console.log(...store);
    return;
  }
  
  store.push(array[index]);
  subsequence(array, store, index + 1, n);
  store.pop();
  subsequence(array, store, index + 1, n);

 
};

const store = [];
console.log(subsequence(array, store, 0, array?.length));
// sum of subsequence

const sumOfSubSequence = (array, store, index, n, s, sum) => {
  if (index >= n) {
    if (s == sum) {
      console.log(...store);
    }
    return;
  }
  store.push(array[index]);
  s += array[index];
  sumOfSubSequence(array, store, index + 1, n, s, sum);
  s -= array[index];
  store.pop();
  sumOfSubSequence(array, store, index + 1, n, s, sum);
};

// sumOfSubSequence(array, store, 0, array?.length, 0, 2);

const firstSubSequence = (array, store, index, n, s, sum) => {
  if (index >= n) {
    if (s === sum) {
      return 1;
    }
    return 0;
  }
  s += array[index];
  // store.push(array[index]);

  // if (firstSubSequence(array, store, index + 1, n, s, sum) === true) {
  //   return true;
  // }
  let l = firstSubSequence(array, store, index + 1, n, s, sum);

  // store.pop();

  s -= array[index];
  let r = firstSubSequence(array, store, index + 1, n, s, sum);
  // if (firstSubSequence(array, store, index + 1, n, s, sum) === true) {
  //   return true;
  // }
  return l + r;
};

// console.log(firstSubSequence(array, store, 0, array?.length, 0, 4));
