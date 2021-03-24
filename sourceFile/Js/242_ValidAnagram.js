/*
 * @Author: AlanGolphi
 * @Date: 2021-03-24 17:56:54
 * @LastEditTime: 2021-03-24 18:01:26
 */
//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//给两个字符串，判断他们是不是字母异位单词
//思路：将字符串转换成字符数组，然后排序，比较之后相等即为 anagram
//js很优雅的解法

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.length == t.length && [...s].sort().join('') === [...t].sort().join('');
    // 先比较两字符串长度是否相等，然后转成字符数组->排序->再转成字符串进行比较是否完全相等。
};