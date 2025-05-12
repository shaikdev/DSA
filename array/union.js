const findUnion = () => {
  const a = [1, 2, 3, 4, 5];
  const b = [2, 3, 4, 4, 5];

  let i = 0;
  let j = 0;
  let temp = [];

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      if (temp.length === 0 || temp[temp.length - 1] !== a[i]) {
        temp.push(a[i]);
      }
      i++;
    } else {
      if (temp.length === 0 || temp[temp.length - 1] !== b[j]) {
        temp.push(b[j]);
      }
      j++;
    }
  }

  while (i < a.length) {
    if (temp.length === 0 || temp[temp.length - 1] !== a[i]) {
      temp.push(a[i]);
    }
    i++;
  }

  while (j < b.length) {
    if (temp.length === 0 || temp[temp.length - 1] !== b[j]) {
      temp.push(b[j]);
    }
    j++;
  }
  return temp;
};

// intersection array
const interSection = () => {
  const a = [1, 2, 3, 4, 5];
  const b = [2, 3, 4, 4, 5];
  let temp = [];

  let j = 0;
  let i = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      i++;
    } else if (b[j] > a[i]) {
      j++;
    } else {
      temp.push(a[i]);
      i++;
      j++;
    }
  }
  return temp;
};

console.log(findUnion());
console.log(interSection());
