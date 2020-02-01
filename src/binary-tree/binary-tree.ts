import TreeNode from './tree-node';
import { preOrder, inOrder, postOrder, layerOrder, Callback } from './traversal';

export default class BinaryTree {
  protected root: TreeNode | null = null;

  constructor(value?: number) {
    if (value !== undefined) {
      this.root = new TreeNode(value);
    }
  }

  preOrder(callback: Callback): void {
    preOrder(this.root, callback);
  }

  inOrder(callback: Callback): void {
    inOrder(this.root, callback);
  }

  postOrder(callback: Callback): void {
    postOrder(this.root, callback);
  }

  layerOrder(callback: Callback): void {
    layerOrder(this.root, callback);
  }
}
