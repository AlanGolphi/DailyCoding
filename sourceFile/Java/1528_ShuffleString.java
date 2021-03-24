/*
 * @Author: AlanGolphi
 * @Date: 2021-03-24 08:31:27
 * @LastEditTime: 2021-03-24 08:50:46
 */

//e.g.
// s = "codeleet"
// indices[] = [4,5,6,7,0,2,1,3]
//put indices in right order and return corect new string res[]
//将字符串 s 按照 indices里的顺序，只返回最终的正确字符串 res[]
class Solution {
    public String restoreString(String s, int[] indices) {
        int len = indices.length;
        char[] res = new char[len];

        for (int i = 0; i < len; i++) {
            res[indices[i]] = s.charAt(i);// s[0]正确的 res位置在res[indices[0]]
        }
        return new String(res);// return new String[]
    }
}