import TreeNode from './tree-node';

export type Callback = (node: TreeNode) => void;

function assertBTNode(val: any): asserts val is TreeNode {
  if (!(val instanceof TreeNode)) {
    throw new Error('Not a BinaryTreeNode');
  }
}

export function preOrder(node: TreeNode | null, callback: Callback): void {
  if (node === null) {
    return;
  }
  callback(node);
  preOrder(node.left, callback);
  preOrder(node.right, callback);
}

export function inOrder(node: TreeNode | null, callback: Callback): void {
  if (node === null) {
    return;
  }
  inOrder(node.left, callback);
  callback(node);
  inOrder(node.right, callback);
}

export function postOrder(node: TreeNode | null, callback: Callback): void {
  if (node === null) {
    return;
  }
  postOrder(node.left, callback);
  postOrder(node.right, callback);
  callback(node);
}

export function layerOrder(node: TreeNode | null, callback: Callback): void {
  if (node === null) {
    return;
  }

  const queue: TreeNode[] = [node];
  while (queue.length > 0) {
    const p = queue.shift();
    assertBTNode(p);
    callback(p);
    if (p.left) {
      queue.push(p.left);
    }
    if (p.right) {
      queue.push(p.right);
    }
  }
}
