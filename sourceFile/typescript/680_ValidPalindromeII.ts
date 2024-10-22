// @algorithm @lc id=680 lang=typescript 
// @title valid-palindrome-ii
// @test("aba")=true
// @test("abca")=true
// @test("abc")=false
function validPalindrome(s: string): boolean {
  if (s.length < 2) return false
  let left = 0
  let right = s.length - 1

  while (left < right && s[left] === s[right]) {
    left++
    right--
  }

  if (validatePalindromeForStr(s, left + 1, right)) {
    return true
  }

  if (validatePalindromeForStr(s, left, right - 1)) {
    return true
  }

  return false

};

function validatePalindromeForStr(s: string, left: number, right: number): boolean {
  for (let i = left, j = right; i < j; i++, j--) {
    if (s[i] !== s[j]) return false
  }

  return true
}

const str1 = 'amanaplanacanalpandama' // true
const str2 = 'hhamanaplanacaealpanama' // false
const str3 = 'racecarb' // true

console.log(
  validPalindrome(str1),
  validPalindrome(str2),
  validPalindrome(str3),
)

