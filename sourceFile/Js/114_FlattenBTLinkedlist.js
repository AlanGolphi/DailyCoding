/*
 * @Author: AlanGolphi
 * @Date: 2021-04-20 16:51:02
 * @LastEditTime: 2021-04-20 16:59:15
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
//将二叉树展开为右侧单链表
let flatten = function(root) {
    if (!root) return null;
    //每个节点的左子节点都是右子节点的父节点
    flatten(root.left);//不断递归找到最叶子树的右节点，将其作为root.right的父节点
    flatten(root.right);
    while (root.left) {
        let temp = root.left;
        while (temp.right) {
            temp = temp.right;
        }
        temp.right = root.right;
        root.right = root.left;
        root.left = null;
    }
}