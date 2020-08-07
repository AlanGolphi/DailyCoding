/*
 * @Author: AlanGolphi
 * @Date: 2020-08-07 11:46:43
 * @LastEditTime: 2020-08-07 12:04:02
 */
class Solution {
    public int search(int[] nums, int target) {
        if (nums == null || nums.length == 0) {
            return -1;
        }

        int lo = 0;
        int hi = nums.length - 1;

        while (lo <= hi) {
            int mid = lo + (hi - lo)/2;
            // 目标值 == 中间值，直接返回 mid 下标
            if (target == nums[mid]) {
                return mid;
            }
            // 左半部分有序
            if (nums[lo] <= nums[mid]) { 
                if (target >= nums[lo] && target <= nums[mid]) {
                    hi = mid - 1;
                }
                else {
                    lo = mid + 1;
                }
            } 
            //右半部分有序
            else {
                if (target >= nums[mid] && target <= nums[hi]) {
                    lo = mid + 1;
                } else {
                    hi = mid - 1;
                }
            }
        }
        return -1;
    }
}
//硬二分法
//旋转有序数组说明整个数组中必定有部分有序的， 所以可以使用二分法
