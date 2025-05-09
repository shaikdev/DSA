const smallestNumber = (array) => {
  let smallestNumber = array[0];
  let secondSmallestNumber = Infinity;
  for (let i = 1; i < array.length; i++) {
    if (smallestNumber > array[i]) {
      secondSmallestNumber = smallestNumber;
      smallestNumber = array[i];
    } else if ( array [i] !== smallestNumber && array[i] < secondSmallestNumber) {
      secondSmallestNumber = array[i];
    }
  }
  return { smallestNumber, secondSmallestNumber };
};

console.log(smallestNumber([39, 50, 55, 67, 39]));
