const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
// output = [[1,0,1],[0,0,0],[1,0,1]]
const setZeroes = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;
  let col0 = 1;

  // col = matrix[0][...]
  // row = matrix[...][0]

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        if (j !== 0) {
          matrix[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  // set 0 for all (1) from (1,1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // check it's not 0
      if (matrix[i][j] !== 0) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  // check first column and row
  if (matrix[0][0] === 0) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  if (col0 === 0) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};

console.log(setZeroes(matrix));

