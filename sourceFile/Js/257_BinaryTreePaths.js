/*
 * @Author: AlanGolphi
 * @Date: 2021-04-19 10:58:45
 * @LastEditTime: 2021-04-19 11:39:31
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
 * @return {string[]}
 */

//遍历返回二叉树的所有路径

//递归法深度优先搜索
let binaryTreePaths = function(root) {
    if (!root) return [];
    let path = [];
    let res = [];
    let dfs = (node) => {
        if (!node) return;
        path.push(node);
        dfs(node.left);
        dfs(node.right);
        if (!node.left && !node.right) {
            res.push(path.map(item => item.val).join('->'));
        }
        path.pop();
    }
    dfs(root);
    return res;
}

//迭代后序遍历，深度优先搜索
let binaryTreePaths = function(root) {
    if (!root) return [];
    let cur = root, res = [], stack = [];
    let visited = new Set();

    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        let node = stack[stack.length - 1];
        if (!node.left && !node.right) {
            res.push(stack.map(item => item.val).join('->'));
        }
        if (node.right && !visited.has(node.right)) {
            cur = node.right;
            visited.add(node.right);
        } else stack.pop();
    }
    return res;
}