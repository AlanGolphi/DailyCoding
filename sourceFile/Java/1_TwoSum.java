/*
 * @Author: AlanGolphi
 * @Date: 2020-08-22 15:11:42
 * @LastEditTime: 2020-08-23 11:06:30
 */
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(target - nums[i])) {
                result[1] = i;
                result[0] = map.get(target - nums[i]);
                return result;
            }
            map.put(nums[i], i);
        }
        return result;
    }
}
//哈希表法
//利用 HashMap 的特性，将数组内的数逐个检查并放进 HashMap 中
//定义 result 数组来存放查找结果。