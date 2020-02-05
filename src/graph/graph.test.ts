import Graph from './graph';

describe('undirected graph', () => {
  const g = new Graph(8);
  g.addEdge(0, 1);
  g.addEdge(0, 3);
  g.addEdge(1, 2);
  g.addEdge(1, 4);
  g.addEdge(2, 5);
  g.addEdge(3, 4);
  g.addEdge(4, 5);
  g.addEdge(4, 6);
  g.addEdge(5, 7);
  g.addEdge(6, 7);

  test('bfs', () => {
    expect(g.bfs(0, 7)).toEqual([0, 1, 2, 5, 7]);
  });

  test('dfs', () => {
    expect(g.dfs(0, 1)).toEqual([0, 1]);
    expect(g.dfs(0, 3)).toEqual([0, 1, 2, 5, 4, 3]);
    expect(g.dfs(0, 7)).toEqual([0, 1, 2, 5, 4, 6, 7]);
    expect(g.dfs(4, 7)).toEqual([4, 1, 2, 5, 7]);
  });
});
