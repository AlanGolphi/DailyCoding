/*
 * @Author: AlanGolphi
 * @Date: 2020-07-18 11:12:16
 * @LastEditTime: 2020-07-20 16:40:41
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
//双指针法，j初始位置在 0 ，i从 0 开始遍历
//如果 i 的位置不是 0 ，就把 第 i 个数赋值给 j 的位置，j++
//如果 i 和 j 不在同一个位置，执行完上面的操作后就把第 i 个数置零