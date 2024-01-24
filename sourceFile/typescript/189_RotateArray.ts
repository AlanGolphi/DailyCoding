// @algorithm @lc id=189 lang=typescript
// @title rotate-array
// @test([1,2,3,4,5,6,7],3)=[5,6,7,1,2,3,4]
// @test([-1,-100,3,99],2)=[3,99,-1,-100]
import {excuteWithTimeAndMemory, reverseArray} from './utils'

/**
 * Do not return anything, modify nums in-place instead.
*/
function rotate1(nums: number[], k: number): void {
  if (!k || !nums.length) return
  const spliceKey = k % 2 === 1 ? k + 1 : k
  const tailArr = nums.splice(spliceKey, nums.length - k)
  while (tailArr.length) {
    nums.unshift(tailArr.pop()!)
  }
}

function rotate(nums: number[], k: number): void {
  const numsLength = nums.length - 1
  reverseArray(nums, 0, numsLength)
  reverseArray(nums, 0, k - 1)
  reverseArray(nums, k, numsLength)
}


let nums1 = [1,2,3,4,5,6,7]
let nums2 = [-1,-100,3,99]

excuteWithTimeAndMemory(() => {
  rotate(nums1, 3)
  console.log(nums1)
}, 'rotate')

excuteWithTimeAndMemory(() => {
  rotate(nums2, 2)
  console.log(nums2)
}, 'rotate')