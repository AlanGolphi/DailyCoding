/*
 * @Author: AlanGolphi
 * @Date: 2020-07-18 17:49:47
 * @LastEditTime: 2020-07-18 18:17:10
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
