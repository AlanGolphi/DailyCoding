// @algorithm @lc id=8 lang=typescript 
// @title string-to-integer-atoi
// @test("42")=42
// @test(" -042")=-42
// @test("1337c0d3")=1337
// @test("0-1")=0
// @test("words and 987")=0
function myAtoi(s: string): number {
  const max = 2 ** 31 - 1
  const min = -max - 1
  let fallback = 0
  const reg = new RegExp(/\s*([+\-]?\d*).*/)

  const matchStr = s.match(reg)?.[1]
  if (!matchStr) return fallback

  const matchNum = +matchStr
  if (isNaN(matchNum)) return fallback

  if (matchNum > max) {
    return max
  } else if (matchNum < min) {
    return min
  }

  return matchNum
};

export { }

const str1 = "4193 with words"
const str2 = "2147483648"
const str3 = "words and 987"
const str4 = "-0032"

console.log(
  myAtoi(str1),
  myAtoi(str2),
  myAtoi(str3),
  myAtoi(str4),
)