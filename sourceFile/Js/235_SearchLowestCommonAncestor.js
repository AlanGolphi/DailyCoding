/*
 * @Author: AlanGolphi
 * @Date: 2021-04-19 09:45:00
 * @LastEditTime: 2021-04-19 09:52:12
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//在二叉搜索树中寻找 p q 的最近公共祖先，利用二叉搜索树的特性可以写出类似二分法的递归或者迭代

//递归法
let lowestCommonAncestor = function(root) {
    if (!root || root == p || root == q) return root;
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else return root;
}

//迭代法
let lowestCommonAncestor = function(root) {
    // if (!root || root == p || root == q) return root;去掉这句快一倍
    let node = root;
    while (node) {
        if (node.val > p.val && node.val > q.val) {
            node = node.left;
        } else if (node.val < p.val && node.val < q.val) {
            node = node.right;
        } else return node;
    }
}