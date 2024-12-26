// @algorithm @lc id=11 lang=typescript
// @title container-with-most-water
// @test([1,8,6,2,5,4,8,3,7])=49
// @test([1,1])=1
function maxArea(height: number[]): number {
  let max: number = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const leftVal = height[left];
    const rightVal = height[right];
    const innerMax = Math.min(leftVal, rightVal) * (right - left);
    max = Math.max(max, innerMax);

    if (leftVal < rightVal) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

console.log("1: ", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

console.log("2: ", maxArea([1, 1]));
