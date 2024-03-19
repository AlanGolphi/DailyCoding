// Given an array, list all unique subsets

const subsets = <T extends number | string>(nums: T[]): T[][] => {
  const len = nums.length;
  const cur: T[] = [];
  const res: T[][] = [];

  const dfs = (nth: number) => {
    res.push(cur.slice());

    for (let i = nth; i < len; i++) {
      cur.push(nums[i]);
      dfs(i + 1);
      cur.pop();
    }
  };
  dfs(0);
  return res;
};

const testArray = [1, 2, 3];
console.log(subsets(testArray));
