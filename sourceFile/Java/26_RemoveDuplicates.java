/*
 * @Author: AlanGolphi
 * @Date: 2020-08-21 22:02:21
 * @LastEditTime: 2020-08-21 22:09:53
 */
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        int i = 0;
        for (int j = 1; j < nums.length; j++) {
            if (nums[i] != nums[j]) {
                nums[++i] = nums[j];
            }
        }
        return i + 1;
    }
}
//双指针法
//定义 i、j 双指针
// i 从 0 开始， 遍历 j 指针，相同则跳过，不同则将 j 处的值复制到 i+1，同时 i 后移
//最后返回 数组长度 i+1