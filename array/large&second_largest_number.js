const LargestNumber = (array) => {
  let largestNumber = array[0];

  for (let i = 1; i < array?.length; i++) {
    if (largestNumber < array[i]) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
};

// second largest number;
const SecondLargestNumber = (array) => {
  let largestNumber = array[0];
  let secondLargestNumber = -1;

  for (let i = 1; i < array?.length; i++) {
    if (largestNumber < array[i]) {
      secondLargestNumber = largestNumber;
      largestNumber = array[i];
    } else if (array[i] < largestNumber && secondLargestNumber < array[i]) {
      secondLargestNumber = array[i];
    }
  }
  return { largestNumber, secondLargestNumber };
};

console.log(SecondLargestNumber([30, 20, 89, 67, 844, 815, 811]));
