// @algorithm @lc id=167 lang=typescript
// @title two-sum-ii-input-array-is-sorted
// @test([2,7,11,15],9)=[1,2]
// @test([2,3,4],6)=[1,3]
// @test([-1,0],-1)=[1,2]
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
