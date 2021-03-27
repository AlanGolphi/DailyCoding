/*
 * @Author: AlanGolphi
 * @Date: 2021-03-27 18:51:02
 * @LastEditTime: 2021-03-27 18:52:54
 */

//Write a function that reverses a string. The input string is given as an array of characters s.
var reverseString = function(s) {
    const len = s.length;
    for (let i = 0, j = len - 1; i < j; i++, j--) {
        [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
};

//双指针法，在头尾各定义一个指针，未相遇时同时移动，并进行交换
//可以不用另外定义 swap() 函数，可以直接交换