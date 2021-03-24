/*
 * @Author: AlanGolphi
 * @Date: 2021-03-24 08:51:18
 * @LastEditTime: 2021-03-24 08:58:33
 */

//Given a string s and an integer array indices of the same length.
//The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
//Return the shuffled string.

//e.g.
// s = "codeleet"
// indices[] = [4,5,6,7,0,2,1,3]
//put indices in right order and return corect new string res[]
//将字符串 s 按照 indices里的顺序，只返回最终的正确字符串 res[]
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

var restoreString = function(s, indices) {
    const len = indices.length;
    let res = [];

    for (let i = 0; i < len; i++) {
        res[indices[i]] = s[i];//在 javascript里字符串可以直接索引；
    }
    return res.join("");//将 res加入字符串并返回
}