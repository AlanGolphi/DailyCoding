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
//递归做法，太简单
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

//迭代做法，难度正常
let preorderTraversal = function(root) {
    if (!root) return [];
    let cur = root, res = [], stack = [];

    while (cur || stack.length) {
        while (cur) {
            res.push(cur.val);
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        cur = cur.right;
    }
    return res;
}