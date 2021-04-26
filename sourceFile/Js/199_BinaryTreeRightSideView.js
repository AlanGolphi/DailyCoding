/*
 * @Author: AlanGolphi
 * @Date: 2021-04-15 17:03:22
 * @LastEditTime: 2021-04-15 17:13:14
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
 * @return {number[]}
 */

//二叉树的右视图，思路是二叉树层序遍历时只保留最右边那位
let rightSideView = function(root) {
    const res = [];
    if (!root) return res;
    let queue = [];
    queue.push(root);

    while (queue.length) {
        let curLevelSize = queue.length;
        while (curLevelSize--) {//循环条件不能漏
            let node = queue.shift();
        if (curLevelSize == 0) {
            res.push(node.val);//结果是节点的值，而不是节点
        }
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        }
    }
    return res;
}