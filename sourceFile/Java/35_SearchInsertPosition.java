/*
 * @Author: AlanGolphi
 * @Date: 2021-03-17 10:22:52
 * @LastEditTime: 2021-03-17 10:34:38
 */

// Binary search function
//二分查找搜索法，适用于数据很大的情况，时间复杂度 O(logn)
//确定搜索范围内的最大和最小，在 while(nmin <= nmax) 里进行 mid 和 target 的比较
//再依据比较结果，对 nmin 和 nmax 进行移动

class Solution {
    public int searchInsert(int[] nums, int target) {
        int nmin = 0, nmax = nums.length - 1;

        while (nmin <= nmax) {
            int mid = (nmin + nmax) / 2;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                nmax = mid - 1;
            } else {
                nmin = mid + 1;
            }
        }
        return nmin;
        // if didn't find, return the index(nmin)找不到就返回 nmin 即最后适配的位置
    }
}