// @algorithm @lc id=28 lang=typescript
// @title find-the-index-of-the-first-occurrence-in-a-string
// @test("sadbutsad","sad")=0
// @test("leetcode","leeto")=-1
function strStr(haystack: string, needle: string): number {
  const reg = new RegExp(needle);
  const matchRes = haystack.match(reg);
  if (!matchRes) return -1;
  return matchRes?.index || -1;
}

function strStr1(haystack: string, needle: string): number {
  const splitArr = haystack.split(needle);
  if (splitArr.length === 1) return -1;
  return splitArr[0].length;
}
