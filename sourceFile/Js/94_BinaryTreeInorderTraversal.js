/*
 * @Author: AlanGolphi
 * @Date: 2021-04-07 14:40:16
 * @LastEditTime: 2021-04-07 15:01:43
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

//二叉树中序遍历
let inorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    let res = [];
    recur(root, res);
    return res;
};

let recur = function(root, arr) {
    if (!root) {
        return [];
    }
    recur(root.left, arr);
    arr.push(root.val);//这句放中间就是中序遍历
    recur(root.right, arr);
};