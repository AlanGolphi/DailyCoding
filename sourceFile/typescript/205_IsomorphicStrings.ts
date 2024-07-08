// @algorithm @lc id=205 lang=typescript
// @title isomorphic-strings
// @test("egg","add")=true
// @test("foo","bar")=false
// @test("paper","title")=true
function isIsomorphic(s: string, t: string): boolean {
  if (s.length === 0 && t.length === 0) return true;
  if (s.length !== t.length) return false;
  const sMap: Record<string, string> = {};
  const tMap: Record<string, string> = {};
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]] && sMap[s[i]] !== t[i]) return false;
    if (tMap[t[i]] && tMap[t[i]] !== s[i]) return false;
    sMap[s[i]] = t[i];
    tMap[t[i]] = s[i];
  }
  return true;
}
