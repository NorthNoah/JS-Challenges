namespace A {
  class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(val: number, left: TreeNode | null, right: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  const minTree = (node: TreeNode | null): number => {
    if (node === null) return 0;

    let mark: number = 0;
    let helpTree: TreeNode[] = [];
    helpTree.push(node);
    while (helpTree.length > 0) {
      mark++;
      let length: number = helpTree.length;
      for (let i = 0; i < length; i++) {
        let cur: TreeNode = helpTree.shift()!;
        if (cur.left === null && cur.right === null) {
          return mark;
        } else {
          if (cur.left) helpTree.push(cur.left);
          if (cur.right) helpTree.push(cur.right);
        }
      }
    }
    return mark;
  };
}
