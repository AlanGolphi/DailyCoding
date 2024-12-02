// @algorithm @lc id=77 lang=typescript
// @title combinations
// @test(4,2)=[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// @test(1,1)=[[1]]
function combine(n: number, k: number): number[][] {
  const result: number[][] = [];
  const curArr: number[] = [];

  const dfs = (nth: number) => {
    if (curArr.length === k) {
      result.push(curArr.slice());
      return;
    }
    for (let i = nth; i <= n; i++) {
      curArr.push(i);
      dfs(i + 1);
      curArr.pop();
    }
  };
  dfs(1);
  return result;
}

console.log(combine(4, 2));

export {};
