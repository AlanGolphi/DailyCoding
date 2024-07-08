// @algorithm @lc id=125 lang=typescript
// @title valid-palindrome
// @test("A man, a plan, a canal: Panama")=true
// @test("race a car")=false
// @test(" ")=true
function isPalindrome(s: string): boolean {
  let valid = true;
  if (s.length < 2) return valid;
  const parsedStr = s.toLowerCase().replace(/[^a-z]/g, "");
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) valid = false;
  }

  return valid;
}
