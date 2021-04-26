/*
 * @Author: AlanGolphi
 * @Date: 2021-04-17 14:30:38
 * @LastEditTime: 2021-04-24 11:32:34
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
 * @return {number}
 */

let midDepth = function(root) {
    let level = 0;
    if (!root) return level;
    let queue = [root];
    while (queue.length) {
        let size = queue.length;
        while (size--) {
            let node = queue.shift();
            if (!node.left && !node.right) return level + 1;//此条件即为叶子节点
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        level++;//以上都没有返回，即返回的是最大层数
    }
    return level;
}
//同样采用层序遍历方法， 当访问到叶子节点的时候即可返回level+1