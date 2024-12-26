import { TreeNode, createTreeFromArray } from "./models";

// @algorithm @lc id=101 lang=typescript
// @title symmetric-tree
// @test([1,2,2,3,4,4,3])=true
// @test([1,2,2,null,3,null,3])=false
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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  const compare = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (p == null && q == null) return true;
    if (p == null || q == null) return false;

    return (
      p.val === q.val && compare(p.left, q.right) && compare(p.right, q.left)
    );
  };

  return compare(root.left, root.right);
}

const tree1 = createTreeFromArray([1, 2, 2, 3, 4, 4, 3]);
const tree2 = createTreeFromArray([1, 2, 2, null, 3, null, 3]);

console.log("tree1: ", isSymmetric(tree1));
console.log("tree2: ", isSymmetric(tree2));
