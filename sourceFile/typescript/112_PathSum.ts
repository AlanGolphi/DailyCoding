import { TreeNode, createTreeFromArray } from "./models";

// @algorithm @lc id=112 lang=typescript
// @title path-sum
// @test([5,4,8,11,null,13,4,7,2,null,null,null,1],22)=true
// @test([1,2,3],5)=false
// @test([],0)=false
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  const calcTarget = (node: TreeNode | null, target: number): boolean => {
    if (!node) return false;
    if (node.val + target === targetSum && !node.left && !node.right)
      return true;

    return (
      calcTarget(node.left, target + node.val) ||
      calcTarget(node.right, target + node.val)
    );
  };

  return calcTarget(root, 0);
}

const tree1 = createTreeFromArray([
  5,
  4,
  8,
  11,
  null,
  13,
  4,
  7,
  2,
  null,
  null,
  null,
  1,
]);
const tree2 = createTreeFromArray([1, 2, 3]);

console.log("tree1: ", hasPathSum(tree1, 22));
console.log("tree2: ", hasPathSum(tree2, 5));
