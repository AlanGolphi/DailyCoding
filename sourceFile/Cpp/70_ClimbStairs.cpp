/*
 * @Author: AlanGolphi
 * @Date: 2020-07-18 17:49:47
 * @LastEditTime: 2020-07-20 16:47:52
 */
class Solution {
public:
    int ClimbStairs(int n)
    {
        vector<int> stairs(n + 1, 0);
        if (n >= 1)
            stairs[1] = 1;
        if (n >= 2)
            stairs[2] = 2;

        for (int i = 3; i <= n; i++) {
            stairs[i] = stairs[i - 1] + stairs[i - 2];
        }
        return stairs[n];
    }
};
// 其本质是斐波那契数列，即到达第 n 个台阶有两种办法：
// 1.从第 n-1 处跨 1 步
// 2.从第 n-2 处跨 2 步
