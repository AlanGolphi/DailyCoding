// @algorithm @lc id=78 lang=typescript
// @title subsets
// @test([1,2,3])=[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// @test([0])=[[],[0]]
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const curArr: number[] = [];

  const dfs = (nth: number) => {
    console.log(curArr.slice(), "\n");
    result.push(curArr.slice());

    for (let i = nth; i < nums.length; i++) {
      curArr.push(nums[i]);
      dfs(i + 1);
      curArr.pop();
    }
  };

  dfs(0);
  return result;
}

const testArr = [1, 2, 3];
console.log(subsets(testArr));

export {};
