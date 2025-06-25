const palindrome = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) return "Not Palindrome";
  }
  return "Palindrome";
};

console.log(palindrome("madam"));
