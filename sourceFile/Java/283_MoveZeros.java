/*
 * @Author: AlanGolphi
 * @Date: 2020-07-18 11:12:16
 * @LastEditTime: 2020-07-18 11:33:43
 */ 

class Solution {
    public void MoveZeros (int[] nums) {
        int j = 0;
        for (int i = 0;i < nums.length; ++i) {
            if (nums[i] != 0) {
                nums[j] = nums[i];
                if (i != j) {
                    nums[i] = 0;
                }
                j ++;
            }
        }
    }
}