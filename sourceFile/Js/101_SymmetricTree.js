/*
 * @Author: AlanGolphi
 * @Date: 2021-04-17 15:09:55
 * @LastEditTime: 2021-04-17 15:19:39
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

//递归做法，简洁
let isSymmetric = function(root) {
    if (!root) return true;
    let comp = (node1, node2) => {
        if (!node1 && !node2) return true;
        if (!node1 || !node2 || node1.val != node2.val) return false;
        return comp(node1.left, node2.right) && comp(node1.right, node2.left);
    }
    return comp(root.left, root.right);
}

//非递归迭代做法，有点类似层序遍历，中途比较
let isSymmetric = function(root) {
    if (!root) return true;
    let queue = [root.left, root.right];
    let node1, node2;

    while (queue.length) {
        node1 = queue.shift();
        node2 = queue.shift();
        if (!node1 && !node2) continue;//这里注意是continue，因为有可能在一棵子树上比较的时候值相同，所以不能返回true
        if (!node1 || !node2 || node1.val != node2.val) return false;
        queue.push(node1.left);
        queue.push(node2.right);
        queue.push(node1.right);
        queue.push(node2.left);
    }
    return true;
}