// @algorithm @lc id=228 lang=typescript
// @title summary-ranges
// @test([0,1,2,4,5,7])=["0->2","4->5","7"]
// @test([0,2,3,4,6,8,9])=["0","2->4","6","8->9"]
function summaryRanges(nums: number[]): string[] {
  if (nums.length <= 1) return !nums.length ? [""] : [`${nums[0]}`];
  let start = 0;
  const res: string[] = [];
  for (let i = 1; i < nums.length; i++) {
    if (i - start !== nums[i] - nums[start]) {
      const beforeIdx = i - 1;
      res.push(
        beforeIdx - start === 0
          ? `${nums[start]}`
          : `${nums[start]}->${nums[beforeIdx]}`
      );
      start = i;
    }
    if (i === nums.length - 1) {
      res.push(
        i - start === 0 ? `${nums[start]}` : `${nums[start]}->${nums[i]}`
      );
    }
  }
  return res;
}
