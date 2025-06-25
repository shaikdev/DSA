// TODO:
const countSubArray = (array, k) => {
  let xr = 0;
  let count = 0;
  const hashMap = new Map();
  hashMap.set(0, 1);
  for (let i = 0; i < array.length; i++) {
    xr = xr ^ array[i];
    // find k
    const x = xr ^ k;
    count = count + hashMap.get(x);
    hashMap.set(xr, (hashMap.get(xr) || 0) + 1);
  }
  return count;
};