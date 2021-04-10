/*
 * @Author: AlanGolphi
 * @Date: 2021-04-10 19:56:08
 * @LastEditTime: 2021-04-10 20:01:35
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//利用Js的splice()和sort()快速方法
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, m.length - m, ...nums2);
    nums1.sort((a, b) => a - b);
}

//双指针法，分别定义两个指针在nums1和nums2来回遍历，最后整合
var merge = function(nums1, m, nums2, n) {
    let p1 = 0, p2 = 0;
    const sorted = new Int8Array(m + n);
    var cur;
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2++];
        } else if (p2 === n) {
            cur = nums1[p1++];
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1++];
        } else {
            cur = nums2[p2++];
        }//p1 p2来回遍历将最小的放到sorted[]中
        sorted[p1 + p2 - 1] = cur;
    }//因为nums1和nums2都是排好序的，所以也很快
    for (let i = 0; i < m + n; i++) {
        nums1[i] = sorted[i];
    }
}