import { createTreeFromArray } from "./models";

// @algorithm @lc id=102 lang=typescript
// @title binary-tree-level-order-traversal
// @test([3,9,20,null,null,15,7])=[[3],[9,20],[15,7]]
// @test([1])=[[1]]
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const queueLength = queue.length;
    const innerRes: number[] = [];
    for (let i = 0; i < queueLength; i++) {
      const headNode = queue.shift();
      if (headNode) {
        innerRes.push(headNode.val);
      }
      if (headNode?.left) {
        queue.push(headNode.left);
      }
      if (headNode?.right) {
        queue.push(headNode.right);
      }
    }
    result.push(innerRes);
  }

  return result;
}

const testTree1 = createTreeFromArray([3, 9, 20, null, null, 15, 7]);
console.log("level order 1: ", levelOrder(testTree1));

const testTree2 = createTreeFromArray([1]);
console.log("level order 2: ", levelOrder(testTree2));
