const LongestPalindrome = (str) => {
  // initial check
  if (str.length < 1) return "";

  // track best palindrome variable;
  let start = 0;
  let end = 0;

  // check palindrome
  const checkPalindrome = (left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < str.length; i++) {
    // find odd length palindrome
    const len1 = checkPalindrome(i, i);
    // find even length palindrome
    const len2 = checkPalindrome(i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return str.substring(start, end + 1);
};

console.log(LongestPalindrome("babad"));
