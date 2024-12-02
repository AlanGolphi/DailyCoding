// @algorithm @lc id=46 lang=typescript
// @title permutations
// @test([1,2,3])=[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// @test([0,1])=[[0,1],[1,0]]
// @test([1])=[[1]]
function permute(nums: number[]): number[][] {
  const len = nums.length;
  if (!len) return [[]];

  const result: number[][] = [];
  const curArr: number[] = [];
  const record: Set<number> = new Set();

  const dfs = (nth: number) => {
    if (nth === len) {
      result.push(curArr.slice());
      return;
    }

    for (let i = 0; i < len; i++) {
      const num = nums[i];
      if (record.has(num)) continue;

      curArr.push(num);
      record.add(num);
      dfs(nth + 1);
      curArr.pop();
      record.delete(num);
    }
  };

  dfs(0);
  return result;
}

const testArr1 = [1, 2, 3, 4];
console.log(permute(testArr1));

export {};
