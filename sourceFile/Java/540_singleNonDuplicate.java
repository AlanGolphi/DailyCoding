/*
 * @Author: AlanGolphi
 * @Date: 2021-03-20 10:15:38
 * @LastEditTime: 2021-03-20 10:59:29
 */

//You are given a sorted array consisting of only integers where every element appears exactly twice, 
//except for one element which appears exactly once. Find this single element that appears only once.

//Follow up: Your solution should run in O(log n) time and O(1) space.

// Elegant solution优雅解法，只查找偶数索引，判断单一元素在哪边
// 0 1 2 3 4 5 6 7 8  index索引

// 1 1 2 3 3 4 4 5 5  nums[mid] != nums[mid + 1], element in left, high = mid
// ↑       ↑       ↑
//low     mid     high

// 1 1 2 2 3 3 4 6 6 nums[mid] == nums[mid + 1], element ind right, low = mid + 2;
// ↑       ↑       ↑
//low     mid     high

class Solution {
    public int singleNonDuplicate(int[] nums) {
        int low = 0, high = nums.length - 1;

        while (low < high) {
            int mid = low + (high - low) / 2;
            if (mid % 2 == 1)
                mid--;// 这里确保索引 mid一定是偶数

            if (nums[mid] == nums[mid + 1]) {
                low = mid + 2;
            } else {
                high = mid;
            }
        }
        return nums[low];
    }
}