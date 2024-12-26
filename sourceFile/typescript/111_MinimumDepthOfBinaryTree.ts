import { TreeNode, createTreeFromArray } from "./models";

// @algorithm @lc id=111 lang=typescript
// @title minimum-depth-of-binary-tree
// @test([3,9,20,null,null,15,7])=2
// @test([2,null,3,null,4,null,5,null,6])=5
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

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let depth = 1;
  let stop = false;
  const queue: (TreeNode | null)[] = [root];

  while (queue.length && !stop) {
    let len = queue.length;
    const temp: (TreeNode | null)[] = [];
    while (len) {
      const node = queue.shift();
      if (node) {
        temp.push(node);

        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      len--;
    }
    if (temp.some((it) => !it || (!it.left && !it.right))) {
      stop = true;
      break;
    } else {
      depth++;
    }
  }

  return depth;
}

const tree1 = createTreeFromArray([3, 9, 20, null, null, 15, 7]);
const tree2 = createTreeFromArray([2, null, 3, null, 4, null, 5, null, 6]);

console.log("tree1: ", minDepth(tree1));
console.log("tree2: ", minDepth(tree2));
