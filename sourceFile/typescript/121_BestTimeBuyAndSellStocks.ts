import { excuteWithTimeAndMemory } from "./utils";
// @algorithm @lc id=121 lang=typescript
// @title best-time-to-buy-and-sell-stock
// @test([7,1,5,3,6,4])=5
// @test([7,6,4,3,1])=0
function maxProfit(prices: number[]): number {
  let min = prices[0];
  let max = 0;
  for (const price of prices) {
    min = Math.min(price, min);
    max = Math.max(max, price - min);
  }
  return max;
}

const prices = [7, 1, 5, 3, 6, 4];

excuteWithTimeAndMemory(() => maxProfit(prices));
