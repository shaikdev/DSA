const movesZeroToEnd = (array) => {
  // find zero
  let j = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      j = i;
      break;
    }
  }

  if (j === -1) return array;

  for (let i = j + 1; i < array.length; i++) {
    if (array[i] !== 0) {
      [array[i], array[j]] = [array[j], array[i]];
      j++;
    }
  }
  return array;
};

console.log(movesZeroToEnd([1, 2, 0, 3, 0, 4, 5, 0, 7, 0, 8, 9]));
