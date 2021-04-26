/*
 * @Author: AlanGolphi
 * @Date: 2021-04-16 14:40:54
 * @LastEditTime: 2021-04-16 15:00:56
 */
/**
 * @param {number} n
 * @return {number}
 */

let numSquares = function(n) {
    let queue = [];
    let map = new Map();
    queue.push([n, 0]);// 放入一个两位数组，第一位是待分解的数，第二位是步数
    map.set(n, true);//使用一个 Map()来存放已经走过的平方数

    while (queue.length) {
        let [num, step] = queue.shift();//从头部出队，而不是从尾部出队
        for (let i = 1; ; i++) {
            let nextNum = num - i * i;
            if (nextNum < 0) break;
            if (nextNum == 0) return step + 1;
            if (!map.get(nextNum)) {//如果Map()里没有，就存一份
                queue.push([nextNum, step + 1]);
                map.set(nextNum, true);
            }
        }
    }
}
