// @algorithm @lc id=5 lang=typescript
// @title longest-palindromic-substring
// @test("babad")="bab"
// @test("cbbd")="bb"
function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  let start = 0;
  let maxLen = 1;

  const getPalindrome = (left: number, right: number) => {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      const len = right - left + 1;
      if (len > maxLen) {
        start = left;
        maxLen = len;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    getPalindrome(i, i);
    getPalindrome(i, i + 1);
  }

  return s.substring(start, start + maxLen);
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("ac"));
