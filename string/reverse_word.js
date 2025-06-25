const reverseWord = (str) => {
  const codeSplit = str.split(" ");
  let ans = [];
  for (i = codeSplit.length - 1; i >= 0; i--) {
    ans.push(codeSplit[i])
  }
  return ans.join(" ");
};

console.log(reverseWord("I love coding"));
