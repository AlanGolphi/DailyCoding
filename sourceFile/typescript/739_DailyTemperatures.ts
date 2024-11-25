// @algorithm @lc id=739 lang=typescript
// @title daily-temperatures
// @test([73,74,75,71,69,72,76,73])=[1,1,4,2,1,1,0,0]
// @test([30,40,50,60])=[1,1,1,0]
// @test([30,60,90])=[1,1,0]
function dailyTemperatures(temperatures: number[]): number[] {
  const res = Array.from({ length: temperatures.length }, () => 0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const top = stack.pop() as number;
      res[top] = i - top;
    }
    stack.push(i);
  }

  return res;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
