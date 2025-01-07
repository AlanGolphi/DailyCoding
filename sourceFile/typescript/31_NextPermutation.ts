// @algorithm @lc id=31 lang=typescript
// @title next-permutation
// @test([1,2,3])=[1,3,2]
// @test([3,2,1])=[1,2,3]
// @test([1,1,5])=[1,5,1]
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  if (nums.length === 1) return;
  if (nums.length === 2) {
    nums.reverse();
    return;
  }

  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  for (
    let left = i + 1, right = nums.length - 1;
    left < right;
    left++, right--
  ) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  }
}

const nums = [1, 5, 1];
nextPermutation(nums);
console.log(nums);
