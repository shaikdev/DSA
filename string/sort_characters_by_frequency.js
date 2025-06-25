// TODO: Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

const s = "tree";
const frequencySort = (s) => {
  const len = s.length;
  let result = "";
  let map = new Map();
  for (let i = 0; i < len; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  const bucket = new Array(len + 1).fill("").map(() => []);
  for (const [char, count] of map) {
    bucket[count].push(char);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    for (let char of bucket[i]) {
      result = result + char.repeat(i);
    }
  }
  return result;
};

console.log(frequencySort(s)); 