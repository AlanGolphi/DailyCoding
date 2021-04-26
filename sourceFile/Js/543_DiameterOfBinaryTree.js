/*
 * @Author: AlanGolphi
 * @Date: 2021-04-19 10:13:48
 * @LastEditTime: 2021-04-19 10:19:37
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

//求二叉树的直径，即求二叉树的最长枝干长度和
let diameterOfBinaryTree = function(root) {
    let maxDepth = (node) => {
        if (!node) return 0;
        let left = maxDepth(node.left);
        let right = maxDepth(node.right);
        max = Math.max(max, (left + right));
        return Math.max(left, right) + 1;
    }
    let max = 0;
    maxDepth(root);
    return max;
}
