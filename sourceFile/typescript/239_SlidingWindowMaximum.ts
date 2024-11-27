// @algorithm @lc id=239 lang=typescript
// @title sliding-window-maximum
// @test([1,3,-1,-3,5,3,6,7],3)=[3,3,5,5,6,7]
// @test([1],1)=[1]
// function maxSlidingWindow(nums: number[], k: number): number[] {
//   if (nums.length === 0) return [];
//   if (k === 1) return nums;

//   let left = 0;
//   let right = k - 1;
//   const result = Array.from({ length: nums.length - (k - 1) }, () => 0);
//   while (right < nums.length) {
//     const maxOne = getMaxInArr(nums, left, right);
//     result[left] = maxOne;

//     left++;
//     right++;
//   }
//   return result;
// }

// function getMaxInArr(nums: number[], left: number, right: number): number {
//   let max = nums[left];
//   for (let i = left; i <= right; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//     }
//   }
//   return max;
// }

function maxSlidingWindow(nums: number[], k: number): number[] {
  if (!nums.length) return [];
  if (k === 1) return nums;

  const deque: number[] = [];
  const result: number[] = [];

  const clearAndPush = (i: number) => {
    if (deque.length && deque[0] === i - k) {
      deque.shift();
    }

    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);
  };

  for (let i = 0; i < nums.length; i++) {
    clearAndPush(i);
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));
