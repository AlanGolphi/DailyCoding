// @algorithm @lc id=125 lang=typescript
// @title valid-palindrome
// @test("A man, a plan, a canal: Panama")=true
// @test("race a car")=false
// @test(" ")=true
function isPalindrome(s: string): boolean {
  const parsedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  for (let i = 0, j = parsedStr.length - 1; i < j; i++, j--) {
    if (parsedStr[i] !== parsedStr[j]) return false;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

