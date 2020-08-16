/*
 * @Author: AlanGolphi
 * @Date: 2020-07-18 16:56:16
 * @LastEditTime: 2020-08-16 15:51:47
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
        return mos;
    }
};
//双指针法，i 和 j 初始是分别是数组的两端
//求 water 时，取数组里较小的数，之后每次把较大的赋值给 mos