// @algorithm @lc id=98 lang=typescript
// @title validate-binary-search-tree
// @test([2,1,3])=true
// @test([5,1,4,null,null,3,6])=false
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

function isValidBST(root: TreeNode | null): boolean {
  const dfs = (node: TreeNode | null, min: number, max: number): boolean => {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  };

  return dfs(root, -Infinity, Infinity);
}
