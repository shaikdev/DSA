const word = "    -42";

const atoi = (str) => {
  let i = 0;
  let sign = 1;
  let result = "";

  while (str[i] === " ") {
    i++;
  }
  if (str[i] === "+" || str[i] === "-") {
    sign = str[i] === "+" ? 1 : -1;
    i++;
  }
  while (str[i] >= "0" && str[i] <= "9" && i < str.length) {
    result = result * 10 + (str[i] - "0");
    i++;
  }
  return result * sign;
};

console.log(atoi(word));
