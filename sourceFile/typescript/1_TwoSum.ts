// @algorithm @lc id=1 lang=typescript
// @title two-sum
// @test([2,7,11,15],9)=[0,1]
// @test([3,2,4],6)=[1,2]
// @test([3,3],6)=[0,1]
function twoSum(nums: number[], target: number): number[] {
  const cache = new Map();
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const gap = target - nums[i];
    if (cache.has(nums[i])) {
      return [cache.get(nums[i]), i];
    }
    cache.set(gap, i);
  }
  return res;
}
