/*
 * @Author: AlanGolphi
 * @Date: 2021-04-19 14:34:49
 * @LastEditTime: 2021-04-19 14:42:36
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

//二叉树中最大路径和，从任意节点到任意节点
let maxPathSum = function(root) {
    let addSum = (node) => {
        if (!node) return 0;
        let left = Math.max(addSum(node.left), 0);
        let right = Math.max(addSum(node.right), 0);
        let cur = left + node.val + right;
        if (max < cur) max = cur;
        return Math.max(left, right) + node.val;
    }
    let max = Number.MIN_SAFE_INTEGER;
    addSum(root);
    return max;
}