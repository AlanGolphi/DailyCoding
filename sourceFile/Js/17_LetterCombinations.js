/*
 * @Author: AlanGolphi
 * @Date: 2020-11-27 20:01:56
 * @LastEditTime: 2020-11-27 20:14:08
 */
const letterCombinations = (digits) => {
    if (digits == null || digits.length == 0) {
        return [];
    }
    const map = {
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz',
    };

    const res = [];
    const leCom = (i, str) => {
        if (i === digits.length) {
            res.push(str);
            return;
        }
        for (const c of map[digits[i]]) {
            leCom(i + 1, str + c);
        }
    }
    leCom(0, '');
    return res;
}