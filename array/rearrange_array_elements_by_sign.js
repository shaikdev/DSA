const array = [1, 2, -4, -5];

const rearrangeBySign = (array) => {
  let ans = [];
  for (let i = 0; i < array.length / 2; i++) {
    ans[i * 2] = array[i];
    ans[i * 2 + 1] = array[i + 2];
  }
  return ans;
};

console.log(rearrangeBySign(array));

//TODO: another variant
// There’s an array ‘A’ of size ‘N’ with positive and negative elements (not necessarily equal).
// Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.
// The leftover elements should be placed at the very end in the same order as in array A
const array1 = [1, 2, -3, -1, -2, -3];
const rearrangeBySignAnotherVariant = (array) => {
  let positive = [];
  let negative = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negative.push(array[i]);
    } else positive.push(array[i]);
  }

  // TODO:check which array length greater
  if (positive.length > negative.length) {
    for (let i = 0; i < negative.length; i++) {
      array[i * 2] = positive[i];
      array[i * 2 + 1] = negative[i];
    }
    let index = negative.length * 2;
    for (let i = negative.length; i < positive.length; i++) {
      array[index] = positive[i];
      index++;
    }
  } else {
    for (let i = 0; i < positive.length; i++) {
      array[i * 2] = positive[i];
      array[i * 2 + 1] = negative[i];
    }
    let index = positive.length * 2;
    for (let i = positive.length; i < negative.length; i++) {
      array[index] = negative[i];
      index++;
    }
  }
  return array;
};

console.log(rearrangeBySignAnotherVariant(array1));
