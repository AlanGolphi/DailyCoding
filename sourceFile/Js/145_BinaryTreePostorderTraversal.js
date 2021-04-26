/*
 * @Author: AlanGolphi
 * @Date: 2021-04-07 14:40:16
 * @LastEditTime: 2021-04-17 11:30:57
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

//二叉树后序遍历，递归做法
let postdorderTraversal = function(root) {
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
    recur(root.right, arr);
    arr.push(root.val);//这句放后面就是后序遍历
};

//迭代做法

let postorderTraversal = function(root) {
    if (!root) return [];
    let cur = root, res = [], stack = [];
    let visited = new Set();

    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        let node = stack[stack.length - 1];
        if (node.right && !visited.has(node.right)) {
            cur = node.right;
            viseted.add(node.right);
        } else {
            res.push(node.val);
            stack.pop();
        }
    }
    return res;
}
//这个超快！

