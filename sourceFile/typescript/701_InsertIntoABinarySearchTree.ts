import { TreeNode, createTreeFromArray, logTreeInLevelOrder } from "./models";

// @algorithm @lc id=784 lang=typescript
// @title insert-into-a-binary-search-tree
// @test([4,2,7,1,3],5)=[4,2,7,1,3,5]
// @test([40,20,60,10,30,50,70],25)=[40,20,60,10,30,50,70,null,null,25]
// @test([4,2,7,1,3,null,null,null,null,null,null],5)=[4,2,7,1,3,5]
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    const node = new TreeNode(val);
    return node;
  }
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  }
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
}

const tree1 = createTreeFromArray([40, 20, 60, 10, 30, 50, 70]);
console.log(tree1);
const insertTree1 = insertIntoBST(tree1, 25);
console.log(insertTree1);
console.log(logTreeInLevelOrder(insertTree1));
