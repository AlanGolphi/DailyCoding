/*
 * @Author: AlanGolphi
 * @Date: 2021-04-16 19:58:08
 * @LastEditTime: 2021-04-16 20:14:53
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

let maxSlidingWindow = function(nums, k) {
    if (nums == null || nums.length < 2) return nums;
    let window = [];
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (window[0] != undefined && window[0] <= i - k) window.shift();//窗口已经划过window[0]这个索引了，可以从前面弹出
        while (nums[window[window.length - 1]] <= nums[i]) window.pop();//遇到一个大的，不知道是不是最大的，从后面开始比，要是小于就弹出
        window.push(i);//窗口形成过程，没问题的一个一个填进去就好了
        if (i >= k - 1) res.push(nums[window[0]]);//每移动一位，最大的那个数的索引肯定在window[0]，把nums[windsow[0]]放进res
    }
    return res;
}
