/*
 * @Author: AlanGolphi
 * @Date: 2021-04-07 14:38:11
 * @LastEditTime: 2021-04-07 15:00:33
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

//二叉树前序遍历
let preorderTraversal = function(root) {
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
    arr.push(root.val);//这句放前面就是前序遍历
    recur(root.left, arr);
    recur(root.right, arr);
};