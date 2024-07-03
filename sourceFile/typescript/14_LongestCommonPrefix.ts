// @algorithm @lc id=14 lang=typescript
// @title longest-common-prefix
// @test(["flower","flow","flight"])="fl"
// @test(["dog","racecar","car"])=""
function longestCommonPrefix(strs: string[]): string {
  if (!strs || !strs.length) {
    return "";
  }
  let commonPrefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    commonPrefix = getCommonPrefix(commonPrefix, strs[i]);
    if (commonPrefix === "") {
      return "";
    }
  }
  return commonPrefix;
}

const getCommonPrefix = (str1: string, str2: string) => {
  let idx = 0;
  while (idx < str1.length && idx < str2.length && str1[idx] === str2[idx]) {
    idx++;
  }
  return str1.substring(0, idx);
};

function longestCommonPrefix1(strs: string[]): string {
  const [first] = strs;
  if (!first) return "";
  let result = "";
  for (let i = 0; i < first.length; i++) {
    let s = first.substring(0, i + 1);
    if (!strs.every((str) => str.startsWith(s))) {
      return result;
    }
    result = s;
  }
  return result;
}
