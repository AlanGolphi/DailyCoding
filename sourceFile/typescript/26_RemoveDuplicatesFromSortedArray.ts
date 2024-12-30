// @algorithm @lc id=26 lang=typescript
// @title remove-duplicates-from-sorted-array
// @test([1,1,2])=2
// @test([0,0,1,1,1,2,2,3,3,4])=5
import { excuteWithTimeAndMemory } from "./utils";

function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) return nums.length;
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[count] !== nums[i]) {
      count++;
      nums[count] = nums[i];
    }
  }

  return count + 1;
}

function removeDuplicates1(nums: number[]): number {
  const record: Set<number> = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!record.has(nums[i])) {
      record.add(nums[i]);
    }
  }
  const arr = Array.from(record);
  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }

  return arr.length;
}

let nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let nums1 = [1,1,2]
// let nums1 = [0]

excuteWithTimeAndMemory(() => {
  console.log(removeDuplicates(nums1));
  console.log(nums1);
}, "remove duplicates");
