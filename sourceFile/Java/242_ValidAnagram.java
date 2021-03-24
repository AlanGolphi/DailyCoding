/*
 * @Author: AlanGolphi
 * @Date: 2021-03-24 17:48:28
 * @LastEditTime: 2021-03-24 17:56:29
 */
//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//给两个字符串，判断他们是不是字母异位单词
//思路：将字符串转换成字符数组，然后排序，比较之后相等即为 anagram
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        char[] str1 = s.toCharArray();
        char[] str2 = t.toCharArray();

        Arrays.sort(str1);
        Arrays.sort(str2);

        return Arrays.equals(str1, str2);
    }
}