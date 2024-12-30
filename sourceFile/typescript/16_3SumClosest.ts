// @algorithm @lc id=16 lang=typescript
// @title 3sum-closest
// @test([-1,2,1,-4],1)=2
// @test([0,0,0],1)=0
function threeSumClosest(nums: number[], target: number): number {
  let res: number = Infinity;
  let gap: number = Infinity;
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length - 2; i++) {
    let j = i + 1;
    let k = sortedNums.length - 1;

    while (j < k) {
      const sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
      const innerGap = Math.abs(target - sum);
      if (innerGap < gap) {
        res = sum;
        gap = innerGap;
      }

      if (sum === target) {
        return sum;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return res;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
