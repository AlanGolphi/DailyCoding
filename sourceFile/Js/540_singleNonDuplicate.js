/*
 * @Author: AlanGolphi
 * @Date: 2021-03-20 11:00:17
 * @LastEditTime: 2021-03-20 11:07:57
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

var singleNonDuplicate = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (mid % 2 == 1) mid--;

        if (nums[mid] == nums[mid + 1]) {
            low = mid + 2;
        } else {
            high = mid;
        }
    }
    return nums[low];
}