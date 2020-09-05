/*
 * @Author: AlanGolphi
 * @Date: 2020-09-05 20:10:12
 * @LastEditTime: 2020-09-05 22:31:38
 */
class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        if (nums == null || nums.length == 0) return res;
        List<Integer> list = new ArrayList<Integer>();
        boolean[] used = new boolean[nums.length];
        Arrays.sort(nums);
        dfs(nums, list, used, res);
        return res;
    }
    public void dfs(int[] nums, List<Integer> list, boolean[] used, List<List<Integer>> res) {
        if (list.size() == nums.length) {
            res.add(new ArrayList<>(list));
            return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i - 1] == nums[i] && !used[i - 1]) continue;
            used[i] = true;
            list.add(nums[i]);
            dfs(nums, list, used, res);
            used[i] = false;
            list.remove(list.size() - 1);
        }
    }
}
