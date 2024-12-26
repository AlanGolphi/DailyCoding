import { TreeNode, createTreeFromArray } from "./models";

// @algorithm @lc id=113 lang=typescript
// @title path-sum-ii
// @test([5,4,8,11,null,13,4,7,2,null,null,5,1],22)=[[5,4,11,2],[5,8,4,5]]
// @test([1,2,3],5)=[]
// @test([1,2],0)=[]
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = [];

  const calcPath = (
    node: TreeNode | null,
    target: number,
    arr: number[]
  ): void => {
    if (!node) return;
    if (!node.left && !node.right && node.val + target === targetSum) {
      res.push([...arr, node.val]);
    }
    calcPath(node.left, target + node.val, [...arr, node.val]);
    calcPath(node.right, target + node.val, [...arr, node.val]);
  };
  calcPath(root, 0, []);

  return res;
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
  5,
  1,
]);
const tree2 = createTreeFromArray([1, 2, 3]);
const tree3 = createTreeFromArray([1, 2]);

console.log("tree1: ", pathSum(tree1, 22));
console.log("tree2: ", pathSum(tree2, 5));
console.log("tree3: ", pathSum(tree3, 0));
