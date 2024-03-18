export class ArrayBinaryTree {
  #tree: TreeItem[] = [];

  constructor(arr: TreeItem[]) {
    this.#tree = [...arr];
  }

  size = () => this.#tree.length;

  val = (idx: number) => {
    if (idx < 0 || idx > this.size() - 1) return null;
    return this.#tree[idx];
  };

  left = (idx: number) => {
    return this.val(2 * idx + 1);
  };

  right = (idx: number) => {
    return this.val(2 * idx + 2);
  };

  levelOrder = () => {
    const res: TreeItem[] = [];
    for (let i = 0; i < this.size(); i++) {
      if (this.val(i) !== null) res.push(this.val(i));
    }
    return res;
  };

  #dfs = (idx: number, order: Order, res: TreeItem[]) => {
    if (this.val(idx) == null) return res;
    if (order === "pre") res.push(this.val(idx));
    this.#dfs(this.left(idx) as number, order, res);
    if (order === "in") res.push(this.val(idx));
    this.#dfs(this.right(idx) as number, order, res);
    if (order === "post") res.push(this.val(idx));
  };

  preOrder = () => {
    const res: TreeItem[] = [];
    this.#dfs(0, "pre", res);
    return res;
  };

  inOrder = () => {
    const res: TreeItem[] = [];
    this.#dfs(0, "in", res);
    return res;
  };

  postOrder = () => {
    const res: TreeItem[] = [];
    this.#dfs(0, "post", res);
    return res;
  };
}

type TreeItem = number | null;
type Order = "pre" | "in" | "post";

const treeArr: TreeItem[] = [
  1,
  2,
  3,
  4,
  null,
  6,
  7,
  8,
  9,
  null,
  null,
  12,
  null,
  null,
  15,
];

const tree = new ArrayBinaryTree(treeArr);

console.log(tree.size());
console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());
