// @algorithm @lc id=202 lang=typescript
// @title happy-number
// @test(19)=true
// @test(2)=false
function isHappy(n: number): boolean {
  const seen = new Set<number>();
  while (n !== 1) {
    if (seen.has(n)) {
      return false;
    }
    seen.add(n);
    n = getNumSquares(n);
  }
  return true;
}

function getNumSquares(n: number) {
  let sum = 0;
  while (n > 0) {
    sum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return sum;
}
