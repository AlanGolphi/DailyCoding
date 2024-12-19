import { createTreeFromArray } from "./models";
// @algorithm @lc id=226 lang=typescript
// @title invert-binary-tree
// @test([4,2,7,1,3,6,9])=[4,7,2,9,6,3,1]
// @test([2,1,3])=[2,3,1]
// @test([])=[]
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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  const right = invertTree(root.right);
  const left = invertTree(root.left);

  root.left = right;
  root.right = left;

  return root;
}

const tree1 = createTreeFromArray([4, 2, 7, 1, 3, 6, 9]);
console.log(invertTree(tree1));
