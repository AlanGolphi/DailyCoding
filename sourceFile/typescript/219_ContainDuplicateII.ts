// @algorithm @lc id=219 lang=typescript
// @title contains-duplicate-ii
// @test([1,2,3,1],3)=true
// @test([1,0,1,1],1)=true
// @test([1,2,3,1,2,3],2)=false
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const cache = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (cache.has(val) && Math.abs(i - (cache.get(val) as number)) <= k) {
      return true;
    }
    cache.set(nums[i], i);
  }
  return false;
}
