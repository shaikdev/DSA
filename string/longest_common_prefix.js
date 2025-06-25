const arr = ["flower", "flow", "flight"];

const longestCommonPrefix = (arr) => {
  const n = arr.length;
  let prefix = arr[0];
  for (let i = 1; i < n; i++) {
    while (!arr[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(arr));
