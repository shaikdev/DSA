const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// output [[7,4,1],[8,5,2],[9,6,3]]

// transform array like row-> column
// reverse array

const rotateArray = (matrix) => {
  // reverse array
  const reverse = (array) => {
    let p1 = 0;
    let p2 = array.length - 1;

    while (p1 < p2) {
      [array[p1], array[p2]] = [array[p2], array[p1]];
      p1++;
      p2--;
    }
  };

  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  //   reverse array
  for (let i = 0; i < matrix.length; i++) {
    reverse(matrix[i]);
  }

  return matrix;
};

console.log(rotateArray(matrix));
