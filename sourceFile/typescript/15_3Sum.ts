// @algorithm @lc id=15 lang=typescript
// @title 3sum
// @test([-1,0,1,2,-1,-4])=[[-1,-1,2],[-1,0,1]]
// @test([0,1,1])=[]
// @test([0,0,0])=[[0,0,0]]

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (sortedNums[i] === sortedNums[i - 1]) continue;

    let j = i + 1;
    let k = sortedNums.length - 1;
    while (j < k) {
      const sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
      if (sum === 0) {
        result.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
        while (j < k && sortedNums[j] === sortedNums[j + 1]) {
          j++;
        }
        while (j < k && sortedNums[k] === sortedNums[k - 1]) {
          k--;
        }
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
