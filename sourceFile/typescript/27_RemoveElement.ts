import { excuteWithTimeAndMemory } from "./utils";
// @title remove-element
// @test([3,2,2,3],3)=2
// @test([0,1,2,2,3,0,4,2],2)=5
function removeElement(nums: number[], val: number): number {
  let count = 0;
  const tempArr: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      tempArr.push(nums[i]);
      count++;
    }
  }
  for (let i = 0; i < count; i++) {
    nums[i] = tempArr[i];
  }
  return count;
}

const nums1 = [3, 2, 2, 3];
const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];

excuteWithTimeAndMemory(() => {
  console.log(removeElement(nums1, 3));
  console.log("nums1", nums1);
}, "remove nums1");

function removeElement1(nums: number[], val: number): number {
  const tempNums = nums.filter((it) => it !== val);
  for (let i = 0; i < tempNums.length; i++) {
    nums[i] = tempNums[i];
  }
  return tempNums.length;
}

excuteWithTimeAndMemory(() => {
  console.log(removeElement1(nums2, 2));
  console.log("nums2", nums2);
}, "remove nums2");
