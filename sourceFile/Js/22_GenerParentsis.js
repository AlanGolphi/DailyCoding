/*
 * @Author: AlanGolphi
 * @Date: 2020-11-26 14:23:48
 * @LastEditTime: 2020-11-26 14:32:28
 */
const generateParenthesis = function(n) {
    const res = [];

    function gener(l, r, str) {
        if (l < r) {
            return;
        }
        if (l == n && r == n) {
            res.push(str);
            return;
        }
        if (l < n) {
            gener(l + 1, r, str + "(");
        }
        if (r < l) {
            gener(l, r + 1, str + ")");
        }
    }
    gener(0, 0, "");
    return res;
}

//当左括号数少于右括号数，直接返回
//当左右括号数目都等于 n 时，完成返回
//当数目不够时，在数组中生成字符串数组