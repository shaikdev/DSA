// TODO:We just remove the numbers from the end until we find a number that ends with 1, 3, 5, 7, or 9 (because they are odd numbers).

const number = "75432";
const largestOddNumber = (num) => {
  const n = num.length;
  for (let i = n - 1; i >= 0; i--) {
    if (num[i] % 2 !== 0) return num.slice(0, i + 1);
  }
  return "";
};

console.log(largestOddNumber(number));
