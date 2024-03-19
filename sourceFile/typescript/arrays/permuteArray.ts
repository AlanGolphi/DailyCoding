// Given an array, list all combinations of the full permutation

const permute = <T extends number | string>(nums: T[]): T[][] => {
  const len = nums.length;
  if (len <= 1) return [nums];
  const cur: T[] = [];
  const res: T[][] = [];
  const visited = {} as Record<T, number>;

  const dfs = (nth: number) => {
    if (nth === len) {
      res.push(cur.slice());
      return;
    }
    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = 1;
        cur.push(nums[i]);
        dfs(nth + 1);
        cur.pop();
        visited[nums[i]] = 0;
      }
    }
  };
  dfs(0);
  return res;
};

const testArr = [1, 2, 3, 4];
console.log(permute(testArr));
