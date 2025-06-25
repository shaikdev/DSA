// TODO:For example, if s = "abcde", then it will be "bcdea" after one shift.

const s = "abcde";
const goal = "cdeab";

const rotateString = (s, goal) => {
  if (s.length !== goal.length) return false;
  return (s + s).includes(goal);
};

console.log(rotateString(s, goal));
