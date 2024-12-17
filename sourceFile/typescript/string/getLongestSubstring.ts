/**
 * get the longest substring without repeating characters
 * @param s
 * @returns
 */

const str = "ABCDDDEFGGHIJKLMN00";

const clearArr = (arr: string[]): void => {
  while (arr.length) {
    arr.pop();
  }
};

const getLongestSubString = (str: string): string => {
  if (!str.length || str.length === 1) return str;
  const sameArr = [];
  const temp = [];
  for (let i = 0; i < str.length; i++) {
    if (temp.length === 0) {
      temp.push(str[i]);
    } else {
      if (temp[temp.length - 1] === str[i]) {
        temp.push(str[i]);
      } else {
        if (temp.length > 1) {
          sameArr.push(temp.join(""));
        }
        clearArr(temp);
        temp.push(str[i]);
      }
    }
  }

  if (temp.length > 1) {
    sameArr.push(temp.join(""));
  }
  console.log(sameArr);

  const splitArr = str.split(new RegExp(sameArr.join("|")));
  const max = splitArr.reduce((pre, cur) =>
    pre.length > cur.length ? pre : cur
  );
  return max;
};

console.log(getLongestSubString(str));
