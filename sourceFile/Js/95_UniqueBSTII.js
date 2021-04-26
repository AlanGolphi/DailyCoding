/*
 * @Author: AlanGolphi
 * @Date: 2021-04-20 18:46:14
 * @LastEditTime: 2021-04-20 19:46:36
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
 * @param {number} n
 * @return {TreeNode[]}
 */
//给定一个整数 n，返回所有由 1-n组成的二叉搜索树
let generateTrees = function(n) {
    if (n == 0) return [];
    let helper = (start, end) => {
        let res = [];
        if (start > end) return [null];
        if (start == end) return [new TreeNode(start)];

        for (let i = start; i <= end; i++) {
            let leftNode = helper(start, i - 1);
            let rightNode = helper(i + 1, end);
            for (const j of leftNode) {
                for (const k of rightNode) {
                    let root = new TreeNode(i);
                    root.left = j;
                    root.right = k;
                    res.push(root);
                }
            }
        }
        return res;
    }
    return helper(1, n);
}