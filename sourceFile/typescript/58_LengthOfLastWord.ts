// @algorithm @lc id=58 lang=typescript
// @title length-of-last-word
// @test("Hello World")=5
// @test("   fly me   to   the moon  ")=4
// @test("luffy is still joyboy")=6
function lengthOfLastWord(s: string): number {
  if (!s) return 0;
  return s.split(" ").filter(Boolean).pop().length;
}
