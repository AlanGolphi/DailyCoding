import { TreeNode, createTreeFromArray, logTreeInLevelOrder } from "./models";

// @algorithm @lc id=99 lang=typescript
// @title recover-binary-search-tree
// @test([1,3,null,null,2])=[3,1,null,null,2]
// @test([3,1,4,null,null,2])=[2,1,4,null,null,3]
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

/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
  let temp: TreeNode | null = null;
  let first: TreeNode | null = null;
  let second: TreeNode | null = null;

  const inorder = (root: TreeNode | null) => {
    if (root) {
      inorder(root.left);
      if (temp && temp.val > root.val) {
        if (!first) {
          first = temp;
        }
        second = root;
      }
      temp = root;

      inorder(root.right);
    }
  };

  inorder(root);

  if (first && second) {
    const temp = (first as TreeNode).val;
    (first as TreeNode).val = (second as TreeNode).val;
    (second as TreeNode).val = temp;
  }
}

const tree1 = createTreeFromArray([1, 3, null, null, 2]);
recoverTree(tree1);
console.log("tree1: ", logTreeInLevelOrder(tree1));

const tree2 = createTreeFromArray([3, 1, 4, null, null, 2]);
recoverTree(tree2);
console.log("tree2: ", logTreeInLevelOrder(tree2));
