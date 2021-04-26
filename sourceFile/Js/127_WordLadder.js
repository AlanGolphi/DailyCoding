/*
 * @Author: AlanGolphi
 * @Date: 2021-04-16 15:48:16
 * @LastEditTime: 2021-04-16 16:50:17
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

    var ladderLength = function(beginWord, endWord, wordList) {
    //只要相差只有一个字母，则是相邻的
    const isSimilar = (a, b) => {
        let diff = 0;
        for (let i = 0; i < a.length; i++) {
            if (a.charAt(i) != b.charAt(i)) diff++;
            if (diff > 1) return false;
        }
        return true;
    }

    let queue = [beginWord];
    let index = wordList.indexOf(beginWord);
    if (index != -1) wordList.splice(index, 1);//假如wordList中有和beginWord相同的，就把它剔除
    let res = 2;

    while (queue.length) {
        let size = queue.length;
        while (size--) {
            let target = queue.shift();
            for (let i = 0; i < wordList.length; i++) {
                if (!isSimilar(target, wordList[i])) continue;
                if (wordList[i] == endWord) {
                    return res;
                } else {
                    queue.push(wordList[i]);//相邻，但是和endWord不同，所以放到queue里
                    wordList.splice(i, 1);//已经放到queue里了，之后的循环就不用再比对这个了，节省时间
                    i--;
                }
            }
        }
        res++;
    }
    return 0;//找了一大圈都没找到，那肯定是没有了，返回 0
};
