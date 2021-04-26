/*
 * @Author: AlanGolphi
 * @Date: 2021-04-11 19:52:31
 * @LastEditTime: 2021-04-11 19:57:35
 */

//统计最长连续子序列
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let res = 1;//用来统计每次的最大值
    let count = 1;//用来计数，如果递增就自加1，不递增了就变回1
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] > nums[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        res = count > res ? count : res;
    }
    return res;
}