import { TreeNode, createTreeFromArray } from "./models";

// @algorithm @lc id=103 lang=typescript
// @title binary-tree-zigzag-level-order-traversal
// @test([3,9,20,null,null,15,7])=[[3],[20,9],[15,7]]
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (!root) return res;
  const queue: (TreeNode | null)[] = [root];
  let isReverse: boolean = false;

  while (queue.length) {
    let len = queue.length;
    const temp: number[] = [];

    while (len) {
      const node = queue.shift();
      if (node) {
        if (isReverse) {
          temp.unshift(node.val);
        } else {
          temp.push(node.val);
        }

        queue.push(node.left);
        queue.push(node.right);
      }
      len--;
    }
    if (temp.length) {
      res.push(temp);
    }
    isReverse = !isReverse;
  }

  return res;
}

const tree1 = createTreeFromArray([3, 9, 20, null, null, 15, 7]);
console.log("tree1: ", zigzagLevelOrder(tree1));

const tree2 = createTreeFromArray([1]);
console.log("tree2: ", zigzagLevelOrder(tree2));
