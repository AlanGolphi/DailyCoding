// @algorithm @lc id=169 lang=typescript
// @title majority-element
// @test([3,2,3])=3
// @test([2,2,1,1,1,2,2])=2

import { excuteWithTimeAndMemory } from "./utils";

function majorityElement(nums: number[]): number {
  let count = 0;
  let target = nums[0];

  for (const num of nums) {
    if (count === 0) target = num;
    count += target === num ? 1 : -1;
  }
  return target;
}

const nums1 = [0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 4, 5];

excuteWithTimeAndMemory(() => {
  console.log(majorityElement(nums1));
}, "get major");
