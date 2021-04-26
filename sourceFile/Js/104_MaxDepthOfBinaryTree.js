/*
 * @Author: AlanGolphi
 * @Date: 2021-04-17 14:00:59
 * @LastEditTime: 2021-04-17 14:21:56
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
//递归做法，简洁明了
let maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
}

//层序遍历做法，每层层序遍历之后都计数一次
let maxDepth = function(root) {
    let level = 0;
    if (!root) return level;
    let queue = [root];

    while (queue.length) {
        let size = queue.length;
        while (size--) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        level++;
    }
    return level;
}