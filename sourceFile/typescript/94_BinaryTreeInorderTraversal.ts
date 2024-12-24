import { TreeNode, createTreeFromArray } from "./models";

// @algorithm @lc id=94 lang=typescript
// @title binary-tree-inorder-traversal
// @test([1,null,2,3])=[1,3,2]
// @test([1,2,3,4,5,null,8,null,null,6,7,9])=[4,2,6,5,7,1,3,9,8]
// @test([])=[]
// @test([1])=[1]
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

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];

  const dfs = (root: TreeNode | null) => {
    if (root) {
      dfs(root.left);
      res.push(root.val);
      dfs(root.right);
    }
  };
  dfs(root);

  return res;
}

const tree1 = createTreeFromArray([1, null, 2, 3]);
console.log("tree1: ", inorderTraversal(tree1));

const tree2 = createTreeFromArray([
  1,
  2,
  3,
  4,
  5,
  null,
  8,
  null,
  null,
  6,
  7,
  9,
]);
console.log("tree2: ", inorderTraversal(tree2));
