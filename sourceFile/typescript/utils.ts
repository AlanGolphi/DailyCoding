export const excuteWithTimeAndMemory = (
  fn: Function,
  timeLabel: string = "case take time"
) => {
  console.time(timeLabel);

  fn();
  const used = process.memoryUsage();

  console.log(`Memory usage: ${Math.round(used.heapUsed / 1024 / 1024)} MB`);

  console.timeEnd(timeLabel);
};
