// @algorithm @lc id=80 lang=typescript
// @title remove-duplicates-from-sorted-array-ii
// @test([1,1,1,2,2,3])=5
// @test([0,0,1,1,1,1,2,3,3])=7
import { excuteWithTimeAndMemory } from "./utils";

function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length;
  let count = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[count - 2]) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
}

// let nums1 = [1,1,1,2,2,3]
let nums1 = [0, 0, 1, 1, 1, 1, 2, 3, 3, 3];
// let nums1 = [1, 2, 3, 4, 5, 6, 7]

excuteWithTimeAndMemory(() => {
  console.log(removeDuplicates(nums1));
  console.log(nums1);
}, "remove duplicates");

function removeDuplicates1(nums: number[]): number {
  if (nums.length < 2) return nums.length;
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[count] !== nums[i]) {
      count++;
      nums[count] = nums[i];
    }
  }
  return count + 1;
}
