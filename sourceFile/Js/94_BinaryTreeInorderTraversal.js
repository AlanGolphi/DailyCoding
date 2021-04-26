/*
 * @Author: AlanGolphi
 * @Date: 2021-04-07 14:40:16
 * @LastEditTime: 2021-04-17 11:30:17
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

//二叉树中序遍历，递归做法太简单
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

//迭代做法，手动维护栈
let inorderTraversal = function(root) {
    if (!root) return [];
    let cur = root, res = [], stack = [];

    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        let temp = stack.pop();
        res.push(temp.val);
        cur = temp.right;
    }
    return res;
}
