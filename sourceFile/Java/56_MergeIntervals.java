/*
 * @Author: AlanGolphi
 * @Date: 2021-03-23 19:28:16
 * @LastEditTime: 2021-03-24 09:14:18
 */
class Solution {
    public int[][] Merge(int[][] intervals) {
        if (intervals.length <= 1) {
            return intervals;
        }

        Arrays.sort(intervals, (i1, i2) -> Integer.compare(i1[0], i2[0]));
        // Java 8 Lambda method sort 2d arrays as a ascending order by [0]

        List<int[]> result = new ArrayList<>();
        int[] newInterval = intervals[0];
        result.add(newInterval);

        for (int[] interval : intervals) {
            if (interval[0] <= newInterval[1]) {
                // 比较前一个区间的[1]和后一个区间的[0],如果重合就将两个区间的[1]重置为较大的nage
                newInterval[1] = Math.max(interval[1], newInterval[1]);
            } else {
                newInterval = interval;
                result.add(newInterval);
            }
        }
        return result.toArray(new int[result.size()][]);
    }
}