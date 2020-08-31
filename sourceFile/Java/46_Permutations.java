/*
 * @Author: AlanGolphi
 * @Date: 2020-08-31 20:28:51
 * @LastEditTime: 2020-08-31 22:03:17
 */

class Solution {
    public List<List<Integer>> permute(int[] nums) {
        int len = nums.length;
        List<List<Integer>> res = new ArrayList<>();
        if (len == 0) return res;
        List<Integer> path = new ArrayList<>();
        boolean[] used = new boolean[len];

        dfs(nums, res, len, 0, path, used);
        return res;
    }
    public void dfs(int[] nums, List<List<Integer>> res, int len, int depth, List<Integer> path, boolean[] used) {
        if (depth == len) {
            res.add(new ArrayList<>(path));
            return;
        }

        for (int i = 0; i < len; i++) {
            if (!used[i]) {
                path.add(nums[i]);
                used[i] = true;

                dfs(nums, res, len, depth + 1, path, used);
                used[i] = false;
                path.remove(path.size() - 1);
            }
        }
    }
}
//回溯法，用递归设计深度优先算法
//不知道为什么 dfs() 里面的变量换个位置就会报错，这个程序是没错的
//没有什么难度，就是对递归不太熟悉