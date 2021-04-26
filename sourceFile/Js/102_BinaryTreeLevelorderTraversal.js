/*
 * @Author: AlanGolphi
 * @Date: 2021-04-07 14:40:16
 * @LastEditTime: 2021-04-15 16:31:56
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//二叉树层序遍历
let levelOrder = function(root) {
    const res = [];
    if (!root) {
        return res;
    }//树空的情况

    const q = [];//用数组模拟队列
    q.push(root);
    while (q.length != 0) {
        const currentLevelSize = q.length;//初始currentLevelSize = 1,即root
        res.push([]);//每一层都先放一个空第二层数组
        for (let i = 1; i <= currentLevelSize; i++) {//while (currentLevelSize--)也可以，更优雅
            const node = q.shift();
            res[res.length - 1].push(node.val);//把每一层放好后转下层
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        // if ((res.length - 1) % 2 == 1) {
        //     res[res.length - 1].reverse();
        // }加了这一段，就可以把层序遍历变成层序锯齿遍历
    }
    return res;
}