import { TreeNode, createTreeFromArray } from "./models";

// @algorithm @lc id=100 lang=typescript
// @title same-tree
// @test([1,2,3],[1,2,3])=true
// @test([1,2],[1,null,2])=false
// @test([1,2,1],[1,1,2])=false
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}

const tree1 = createTreeFromArray([2, 2, 2, null, 2, null, null, 2]);
const tree2 = createTreeFromArray([2, 2, 2, 2, null, 2, null]);

console.log(isSameTree(tree1, tree2));
