/*
 * @Author: AlanGolphi
 * @Date: 2021-03-29 18:37:20
 * @LastEditTime: 2021-03-29 19:32:05
 */

// 给定一个数组，和一个要剔除的元素，最后返回剔除元素后的数组长度

// 双指针遍历，两个指针都从头开始，当快指针遇到 != val的时候，就将这个值赋给慢指针，慢指针索引即为新数组长度
var removeElement = function(nums, val) {
    let res = 0;
    for (const num of nums) {
        //这里不清楚为什么用 i循环会报错，可能是 LeetCode中的题目对应关系
        if (num != val) {
            nums[res++] = num;
        }
    }
    return res;
};