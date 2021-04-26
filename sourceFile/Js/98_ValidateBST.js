/*
 * @Author: AlanGolphi
 * @Date: 2021-04-20 14:10:19
 * @LastEditTime: 2021-04-20 14:18:15
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
 * @return {boolean}
 */

//递归法
let isValidBST = function(root) {
    let comp = (node, max, min) => {
        if (!node) return true;
        if (node.val >= max || node.val <= min) return false;
        return comp(node.left, node.val, min) && comp(node.right, max, node.val);
        // 递归对左子树收缩上限，对右子树收缩下限
    }
    return comp(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
}
// 中序遍历法
let isValidBST = function(root) {
    if (!root) return true;
    let cur = root, stack = [];
    let pre = null;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        let temp = stack.pop();
        if (pre && pre.val >= temp.val) return false;
        pre = temp;//关键，保证每次都是和前一个比较
        cur = temp.right;
    }
    return true;
}