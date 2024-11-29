export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export const createTreeFromArray = (arr: (number | null)[]) => {
  if (!Array.isArray(arr) || !arr.length || !arr?.[0])
    throw new Error("require a non-empty array!");

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    const headNode = queue.shift();
    if (!headNode) continue;
    if (i < arr.length && arr[i] !== null) {
      const leftNode = new TreeNode(arr[i] as number);
      headNode.left = leftNode;
      queue.push(leftNode);
    }
    i += 1;

    if (i < arr.length && arr[i] !== null) {
      const rightNode = new TreeNode(arr[i] as number);
      headNode.right = rightNode;
      queue.push(rightNode);
    }
    i += 1;
  }
  return root;
};
