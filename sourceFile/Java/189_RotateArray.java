/*
 * @Author: AlanGolphi
 * @Date: 2020-08-24 18:25:43
 * @LastEditTime: 2020-08-24 18:47:00
 */
//额外数组法
class Solution {
    public void rotate(int[] nums, int k) {
        int[] temp = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            temp[(i + k) % nums.length] = nums[i];
        }
        for (int i = 0; i < nums.length; i++) {
            nums[i] = temp[i];
        }
    }
}
//利用另一个数组 temp，将数字按正确的顺序放置在 temp 中， 再转至 nums



//三次翻转法
class Solution {
    public void rotate(int[] nums, int k) {
        k %= nums.length;
        reverse(nums, 0, nums.length - 1); //将整个数组翻转一次
        reverse(nums, 0, k - 1); //将前 k 个数翻转一次
        reverse(nums, k, nums.length - 1); //将剩下的后面的数翻转一次
    }
    public void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
}
