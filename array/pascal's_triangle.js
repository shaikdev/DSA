// TODO: Given an integer numRows, return the first numRows of Pascal's triangle
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

const generate = (numRows) => {
  let tempArray = [];
  for (let i = 1; i <= numRows; i++) {
    tempArray.push(generatePascal(i));
  }
  return tempArray;
};

const generatePascal = (Row) => {
  let ans = 1;
  ansArray = [1];
  for (let Col = 1; Col < Row; Col++) {
    ans = ans * (Row - Col);
    ans = ans / Col;
    ansArray.push(ans);
  }
  return ansArray;
};

console.log(generate(5));
