// @algorithm @lc id=211 lang=typescript 
// @title design-add-and-search-words-data-structure

function WordDictionary(this: { dictionary: Record<number, string[]> }) {
  this.dictionary = {}
}

WordDictionary.prototype.addWord = function (word: string): void {
  if (word == undefined) return
  const strLength = word.length
  if (!this.dictionary[strLength]) {
    this.dictionary[strLength] = [word]
  } else {
    this.dictionary[strLength].push(word)
  }
}

WordDictionary.prototype.search = function (word: string): boolean {
  if (word == undefined) return false
  const strLength = word.length
  const targetArr = this.dictionary[strLength]
  if (!targetArr) return false
  if (!word.includes('.')) {
    return targetArr.includes(word)
  }

  const reg = new RegExp(word)
  return targetArr.some((it: string) => reg.test(it))
}