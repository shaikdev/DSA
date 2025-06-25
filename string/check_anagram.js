// TODO:Two words have the same letters, just in a different order.

const s = "anagram";
const t = "nagaram";

var isAnagram = (s, t) => {
  const word1 = s.split("").sort().join();
  const word2 = t.split("").sort().join();
  return word1 === word2;
};

console.log(isAnagram(s, t));
