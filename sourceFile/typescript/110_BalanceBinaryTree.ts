import { TreeNode, createTreeFromArray } from "./models";

// @algorithm @lc id=110 lang=typescript
// @title balanced-binary-tree
// @test([3,9,20,null,null,15,7])=true
// @test([1,2,2,3,3,null,null,4,4])=false
// @test([])=true
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  const getDepth = (node: TreeNode | null, depth: number): number => {
    if (!node) return depth;

    const leftDepth = getDepth(node.left, depth + 1);
    const rightDepth = getDepth(node.right, depth + 1);

    if (Math.abs(leftDepth - rightDepth) > 1) return -1;

    return Math.max(leftDepth, rightDepth);
  };

  return getDepth(root, 0) > 0;
}

const tree1 = createTreeFromArray([3, 9, 20, null, null, 15, 7]);
const tree2 = createTreeFromArray([1, 2, 2, 3, 3, null, null, 4, 4]);

console.log("tree1: ", isBalanced(tree1));
console.log("tree2: ", isBalanced(tree2));
