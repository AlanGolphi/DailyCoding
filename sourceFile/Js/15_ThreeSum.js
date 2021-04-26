/*
 * @Author: AlanGolphi
 * @Date: 2021-03-29 18:05:48
 * @LastEditTime: 2021-04-21 19:50:50
 */
// 给一个数组，查找数组中是否存在三个元素相加等于0，存在的话就组成一个数组，最后返回数组的数组

//1.排序 nums.sort((a, b) => a - b) 升序排序
//2. for() 循环里定义 left right指针，通过比较 nums[left] + nums[right] 和 target，移动 left 和 right；

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    let res = [];
    nums.sort((a,b) => a - b);//优雅的升序排序算法
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] == nums[i - 1]) {
            continue;//保证最后结果不会输出重复项
        }
        let target = -nums[i];//求三数之和=n，则target = n - nums[i];
        let left = i + 1;
        let right = len - 1;
        while (left < right) {
            if (nums[left] + nums[right] == target) {
                res.push([-target, nums[left], nums[right]]);
                while (nums[left] == nums[left + 1]){
                    left ++;
                }
                while (nums[right] == nums[right - 1]) {
                    right --;
                }
                left++;
                right--;
            }
            else if (nums[left] + nums[right] < target) {
                left++;
            } else if (nums[left] + nums[right] > target) {
                right--;
            }
        }
        
    }
    return res;
}