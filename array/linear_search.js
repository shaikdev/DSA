const LinearSearch = (array, k) => {
  let value = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === k) {
      value =  i;
      break;
    }
  }
  return value
};

console.log(LinearSearch([1, 2, 3, 4, 5],5));
