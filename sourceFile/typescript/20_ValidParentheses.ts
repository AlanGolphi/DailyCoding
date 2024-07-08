// @algorithm @lc id=20 lang=typescript
// @title valid-parentheses
// @test("()")=true
// @test("()[]{}")=true
// @test("(]")=false
function isValid(s: string): boolean {
  const strLength = s.length;
  if (strLength === 0) return true;
  if (strLength % 2 !== 0) return false;
  const checkStack: string[] = [];
  const leftParentheses = ["(", "[", "{"];

  const parenthMap: Record<string, string> = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < strLength; i++) {
    if (leftParentheses.includes(s[i])) {
      checkStack.push(s[i]);
    } else {
      const popVal = checkStack.pop();
      if (!popVal) return false;
      if (s[i] !== parenthMap[popVal]) return false;
    }
  }

  return checkStack.length === 0;
}
