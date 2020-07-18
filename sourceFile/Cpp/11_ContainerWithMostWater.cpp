/*
 * @Author: AlanGolphi
 * @Date: 2020-07-18 16:56:16
 * @LastEditTime: 2020-07-18 18:16:59
 */
class Solution {
public:
    int maxArea(vector<int>& height)
    {
        int mos = 0;
        int i = 0;
        int j = height.size() - 1;
        while (i < j) {
            int water = (j - i) * min(height[i], height[j]);
            mos = max(mos, water);
            if (height[i] < height[j]) {
                i++;
            } else
                j--;
        }
    }
};