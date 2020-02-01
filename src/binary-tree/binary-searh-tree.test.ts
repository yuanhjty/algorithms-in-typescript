import TreeNode from './tree-node';
import BinarySearchTree from './binary-search-tree';

const getMockCallback = (): jest.Mock<void, [TreeNode]> =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  jest.fn((node: TreeNode) => {
    // console.log(node.value);
    /* empty */
  });

const getCallbackCallsParams = (callback: ReturnType<typeof getMockCallback>): number[] =>
  callback.mock.calls.map(([node]) => node.value);

const values = [4, 2, 3, 1, 7, 2, 3, 5, 4, 6, 8];

test('binary search tree empty', () => {
  const mockCallback = getMockCallback();
  const emptyTree = new BinarySearchTree();
  emptyTree.preOrder(mockCallback);
  emptyTree.inOrder(mockCallback);
  emptyTree.postOrder(mockCallback);
  emptyTree.layerOrder(mockCallback);
  expect(mockCallback.mock.calls.length).toBe(0);
});

describe('binary search tree insert and traversal', () => {
  const tree = new BinarySearchTree();

  beforeAll(() => {
    values.forEach(v => {
      tree.insert(v);
    });
  });

  test('pre order traversal', () => {
    const preOrderCallback = getMockCallback();
    tree.preOrder(preOrderCallback);
    expect(preOrderCallback.mock.calls.length).toBe(11);
    expect(getCallbackCallsParams(preOrderCallback)).toEqual([4, 2, 1, 3, 2, 3, 7, 5, 4, 6, 8]);
  });

  test('in order traversal', () => {
    const inOrderCallback = getMockCallback();
    tree.inOrder(inOrderCallback);
    expect(inOrderCallback.mock.calls.length).toBe(11);
    expect(getCallbackCallsParams(inOrderCallback)).toEqual([1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8]);
  });

  test('post order traversal', () => {
    const postOrderCallback = getMockCallback();
    tree.postOrder(postOrderCallback);
    expect(postOrderCallback.mock.calls.length).toBe(11);
    expect(getCallbackCallsParams(postOrderCallback)).toEqual([1, 2, 3, 3, 2, 4, 6, 5, 8, 7, 4]);
  });

  test('layer order traversal', () => {
    const layerOrderCallback = getMockCallback();
    tree.layerOrder(layerOrderCallback);
    expect(layerOrderCallback.mock.calls.length).toBe(11);
    expect(getCallbackCallsParams(layerOrderCallback)).toEqual([4, 2, 7, 1, 3, 5, 8, 2, 3, 4, 6]);
  });
});

describe('binary search tree find', () => {
  const tree = new BinarySearchTree();

  beforeAll(() => {
    values.forEach(v => {
      tree.insert(v);
    });
  });

  test('find', () => {
    expect(tree.find(10)).toBeNull();

    const result4 = tree.find(4) as TreeNode;
    expect(result4.value).toBe(4);
    expect((result4.left as TreeNode).value).toBe(2);
    expect((result4.right as TreeNode).value).toBe(7);

    const result2 = tree.find(2) as TreeNode;
    expect(result2.value).toBe(2);
    expect((result2.left as TreeNode).value).toBe(1);
    expect((result2.right as TreeNode).value).toBe(3);

    const result5 = tree.find(5) as TreeNode;
    expect(result5.value).toBe(5);
    expect((result5.left as TreeNode).value).toBe(4);
    expect((result5.right as TreeNode).value).toBe(6);

    const result8 = tree.find(8) as TreeNode;
    expect(result8.value).toBe(8);
    expect(result8.left).toBeNull();
    expect(result8.right).toBeNull();
  });

  test('find all', () => {
    expect(tree.findAll(1).map(n => n.value)).toEqual([1]);
    expect(tree.findAll(2).map(n => n.value)).toEqual([2, 2]);
    expect(tree.findAll(4).map(n => n.value)).toEqual([4, 4]);
    expect(tree.findAll(6).map(n => n.value)).toEqual([6]);
    expect(tree.findAll(9).map(n => n.value)).toEqual([]);
  });
});

describe('binary search tree delete', () => {
  const tree = new BinarySearchTree();

  beforeEach(() => {
    values.forEach(v => {
      tree.insert(v);
    });
  });

  afterEach(() => {
    tree.clear();
  });

  test('delete', () => {
    tree.delete(1);
    const callback1 = getMockCallback();
    tree.preOrder(callback1);
    expect(getCallbackCallsParams(callback1)).toEqual([4, 2, 3, 2, 3, 7, 5, 4, 6, 8]);

    tree.delete(7);
    const callback2 = getMockCallback();
    tree.preOrder(callback2);
    expect(getCallbackCallsParams(callback2)).toEqual([4, 2, 3, 2, 3, 8, 5, 4, 6]);

    tree.delete(2);
    const callback3 = getMockCallback();
    tree.preOrder(callback3);
    expect(getCallbackCallsParams(callback3)).toEqual([4, 3, 2, 3, 8, 5, 4, 6]);

    tree.delete(4);
    const callback4 = getMockCallback();
    tree.preOrder(callback4);
    expect(getCallbackCallsParams(callback4)).toEqual([4, 3, 2, 3, 8, 5, 6]);

    tree.delete(4);
    const callback5 = getMockCallback();
    tree.preOrder(callback5);
    expect(getCallbackCallsParams(callback5)).toEqual([5, 3, 2, 3, 8, 6]);
  });

  test('delete all', () => {
    expect(tree.deleteAll(2)).toBeTruthy();
    const callback1 = getMockCallback();
    tree.preOrder(callback1);
    expect(getCallbackCallsParams(callback1)).toEqual([4, 3, 1, 3, 7, 5, 4, 6, 8]);

    expect(tree.deleteAll(4)).toBeTruthy();
    const callback2 = getMockCallback();
    tree.preOrder(callback2);
    expect(getCallbackCallsParams(callback2)).toEqual([5, 3, 1, 3, 7, 6, 8]);

    expect(tree.deleteAll(3)).toBeTruthy();
    const callback3 = getMockCallback();
    tree.preOrder(callback3);
    expect(getCallbackCallsParams(callback3)).toEqual([5, 1, 7, 6, 8]);

    expect(tree.deleteAll(9)).toBeFalsy();
    const callback5 = getMockCallback();
    tree.preOrder(callback5);
    expect(getCallbackCallsParams(callback5)).toEqual([5, 1, 7, 6, 8]);
  });
});
