/**
 * excute the target fn and log time and memory usage
 * @param fn
 * @param timeLabel
 */
export const excuteWithTimeAndMemory = (
  fn: Function,
  timeLabel: string = "case take time"
) => {
  console.time(timeLabel);
  fn();
  console.timeEnd(timeLabel);

  const used = process.memoryUsage();
  console.log(`Memory usage: ${Math.round(used.heapUsed / 1024)} KB`);
};

/**
 * reverse target array by left and right index in-place
 * @param nums
 * @param leftIdx
 * @param rightIdx
 */
export const reverseArray = (
  nums: number[],
  leftIdx: number,
  rightIdx: number
): void => {
  let temp: number;
  while (leftIdx < rightIdx) {
    temp = nums[rightIdx];
    nums[rightIdx] = nums[leftIdx];
    nums[leftIdx] = temp;
    leftIdx++;
    rightIdx--;
  }
};
