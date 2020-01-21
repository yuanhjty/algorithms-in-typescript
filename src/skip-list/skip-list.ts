export class ListNode {
  value: number;
  forwards: ListNode[] = [];

  constructor(value: number = -1) {
    this.value = value;
  }
}

export default class SkipList {
  private MAX_LEVEL = 16;
  private SKIP_PROBABILITY = 0.5;
  private head = new ListNode();
  private levelCount = 1;

  find(value: number): ListNode | null {
    let p = this.head;
    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.forwards[i] && p.forwards[i].value < value) {
        p = p.forwards[i];
      }
    }

    const node = p.forwards[0];
    return node && node.value === value ? node : null;
  }

  insert(value: number): SkipList {
    const level = this.randomLevel();
    const newNode = new ListNode(value);
    const update = new Array<ListNode>(level);
    update.fill(this.head);

    let p = this.head;
    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.forwards[i] && p.forwards[i].value < value) {
        p = p.forwards[i];
      }
      update[i] = p;
    }

    for (let i = 0; i < level; i++) {
      newNode.forwards[i] = update[i].forwards[i];
      update[i].forwards[i] = newNode;
    }

    if (this.levelCount < level) {
      this.levelCount = level;
    }

    return this;
  }

  delete(value: number): ListNode | null {
    const update = new Array<ListNode>(this.levelCount);
    let p = this.head;
    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.forwards[i] && p.forwards[i].value < value) {
        p = p.forwards[i];
      }
      update[i] = p;
    }

    let ret = null;
    const node = p.forwards[0];
    if (node && node.value === value) {
      ret = node;
      for (let i = this.levelCount - 1; i >= 0; i--) {
        const forward = update[i].forwards[i];
        if (forward && forward.value === value) {
          update[i].forwards[i] = forward.forwards[i];
        }
      }
    }

    return ret;
  }

  toArray(): number[] {
    let p = this.head.forwards[0];
    const ret = [];
    while (p) {
      ret.push(p.value);
      p = p.forwards[0];
    }
    return ret;
  }

  private randomLevel(): number {
    let level = 1;
    while (Math.random() < this.SKIP_PROBABILITY && level < this.MAX_LEVEL) {
      level += 1;
    }
    return level;
  }
}

// 1,          5,          9
// 1, 2,    4, 5, 6,    8, 9, 10
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
