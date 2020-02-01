import BinaryTree from './binary-tree';
import TreeNode from './tree-node';

export default class BinarySearchTree extends BinaryTree {
  insert(value: number): void {
    if (!this.root) {
      this.root = new TreeNode(value);
      return;
    }

    let target: TreeNode | null = this.root;
    while (target) {
      if (value < target.value) {
        if (!target.left) {
          target.left = new TreeNode(value);
          return;
        }
        target = target.left;
      } else {
        if (!target.right) {
          target.right = new TreeNode(value);
          return;
        }
        target = target.right;
      }
    }
  }

  find(value: number): TreeNode | null {
    let target: TreeNode | null = this.root;
    while (target) {
      if (value < target.value) {
        target = target.left;
      } else if (value > target.value) {
        target = target.right;
      } else {
        return target;
      }
    }
    return null;
  }

  findAll(value: number): TreeNode[] {
    let target: TreeNode | null = this.root;
    const targets: TreeNode[] = [];
    while (target) {
      if (value < target.value) {
        target = target.left;
      } else if (value > target.value) {
        target = target.right;
      } else {
        targets.push(target);
        target = target.right;
      }
    }
    return targets;
  }

  private deleteNode(target: TreeNode | null, targetParent: TreeNode | null): boolean {
    if (!target) {
      return false;
    }
    // if target node has two children nodes
    if (target.left && target.right) {
      let rightMin: TreeNode = target.right;
      let rightMinParent: TreeNode | null = target;
      while (rightMin.left) {
        rightMinParent = rightMin;
        rightMin = rightMin.left;
      }

      target.value = rightMin.value;
      target = rightMin;
      targetParent = rightMinParent;
    }

    // if target node has zero or one child
    const targetChild = target.left || target.right;
    if (!targetParent) {
      this.root = targetChild;
    } else if (targetParent.left === target) {
      targetParent.left = targetChild;
    } else {
      targetParent.right = targetChild;
    }

    return true;
  }

  delete(value: number): boolean {
    let target: TreeNode | null = this.root;
    let targetParent: TreeNode | null = null;
    // find target node
    while (target && target.value !== value) {
      targetParent = target;
      if (value < target.value) {
        target = target.left;
      } else {
        target = target.right;
      }
    }
    if (!target) {
      // not found
      return false;
    }

    return this.deleteNode(target, targetParent);
  }

  deleteAll(value: number): boolean {
    let target: TreeNode | null = this.root;
    let targetParent: TreeNode | null = null;
    const targets: [TreeNode, TreeNode | null][] = [];
    while (target) {
      if (value === target.value) {
        targets.push([target, targetParent]);
        targetParent = target;
        target = target.right;
      } else {
        targetParent = target;
        target = value < target.value ? target.left : target.right;
      }
    }

    if (targets.length === 0) {
      return false;
    }

    for (let i = targets.length - 1; i >= 0; i--) {
      const [t, tp] = targets[i];
      this.deleteNode(t, tp);
    }
    return true;
  }

  clear(): void {
    this.root = null;
  }
}
