/**
 * Do not return anything, modify nums1 in-place instead.
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */
// function mergeSortedArr(nums1: number[], m: number, nums2: number[], n: number): void {
//   nums1.splice(m, n, ...nums2);
//   nums1.sort((a, b) => a - b);
// }

import { excuteWithTimeAndMemory } from "./utils";

function mergeSortedArr(nums1: number[], m: number, nums2: number[], n: number) {
  const sorted = new Int8Array(m + n);
  let cur: number;
  let p1 = 0;
  let p2 = 0;
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      cur = nums2[p2++];
    } else if (p2 === n) {
      cur = nums1[p1++];
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++];
    } else cur = nums2[p2++];

    sorted[p1 + p2 - 1] = cur;
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = sorted[i];
  }
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

excuteWithTimeAndMemory(() => {
  mergeSortedArr(nums1, m, nums2, n)
  console.log('result: ', nums1)
}, 'mergeSortedArr')
