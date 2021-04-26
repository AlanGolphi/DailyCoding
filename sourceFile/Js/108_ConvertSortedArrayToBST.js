/*
 * @Author: AlanGolphi
 * @Date: 2021-04-20 15:04:00
 * @LastEditTime: 2021-04-20 15:13:31
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
//将一个排序后的数组转换成一棵二叉搜索树
let sortedArrayToBST = function(nums) {
    if (nums.length == 0) return null;
    let helper = (start, end) => {
        if (start > end) return null;
        let mid = Math.floor((start + end) / 2);//递归地将每个中间值变成二叉树的中间节点
        let node = new TreeNode(nums[mid]);//因为已经排序了，所以最后得到的是二叉搜索树
        node.left = helper(start, mid - 1);
        node.right = helper(mid + 1, end);
        return node;
    }
    return helper(0, nums.length - 1);
}

