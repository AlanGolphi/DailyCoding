export class TreeNode {
  val: number | string;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number | string) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}