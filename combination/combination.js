const combination = (index, arr, ans, ds, target) => {
  if (index >= arr.length) {
    if (target === 0) {
      ans.push([...ds]);
    }
    return;
  }

  if (arr[index] <= target) {
    ds.push(arr[index]);
    combination(index, arr, ans, ds, target - arr[index]);
    ds.pop();
  }

  combination(index + 1, arr, ans, ds, target);
  //   return ans
};

const combinationSum = () => {
  const array = [4, 6];
  const ds = [];
  const ans = [];
  combination(0, array, ans, ds, 12);
  return ans;
};

console.log(combinationSum());
