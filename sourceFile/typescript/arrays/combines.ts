// Given an array, get all combines of k length

const combine = (n: number, k: number): number[][] => {
  const cur: number[] = [];
  const res: number[][] = [];

  const dfs = (nth: number) => {
    if (cur.length === k) {
      res.push(cur.slice());
      return;
    }
    for (let i = nth; i < n; i++) {
      cur.push(i);
      dfs(i + 1);
      cur.pop();
    }
  };
  dfs(1);
  return res;
};

console.log(combine(4, 2));
