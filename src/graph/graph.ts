import Queue from '../queue/linked-queue';

// undirected graph
export default class Graph {
  private vertexCount: number;
  private adjacencyList: Set<number>[];
  private dfsFound = false;

  constructor(vertexCount: number) {
    this.vertexCount = vertexCount;
    this.adjacencyList = new Array<Set<number>>(vertexCount);
    for (let i = 0; i < vertexCount; i++) {
      this.adjacencyList[i] = new Set<number>();
    }
  }

  addEdge(start: number, end: number): void {
    this.adjacencyList[start].add(end);
    this.adjacencyList[end].add(start);
  }

  bfs(start: number, end: number): number[] {
    if (start === end) {
      return [];
    }

    const prevList: number[] = new Array<number>(this.vertexCount);
    prevList.fill(-1);
    const visited = new Array<boolean>(this.vertexCount);
    const queue = new Queue<number>();
    visited[start] = true;
    queue.enqueue(start);

    while (!queue.isEmpty()) {
      const current = queue.dequeue() as number;
      const adjacency = this.adjacencyList[current];
      for (const vertex of adjacency) {
        if (!visited[vertex]) {
          prevList[vertex] = current;
          if (vertex === end) {
            return this.resolvePath(end, prevList);
          }
          visited[vertex] = true;
          queue.enqueue(vertex);
        }
      }
    }

    return [];
  }

  dfs(start: number, end: number): number[] {
    if (start === end) {
      return [];
    }

    this.dfsFound = false;
    const prevList: number[] = new Array<number>(this.vertexCount);
    prevList.fill(-1);
    const visited = new Array<boolean>(this.vertexCount);
    this.dfsRecursively(start, end, prevList, visited);

    return this.dfsFound ? this.resolvePath(end, prevList) : [];
  }

  private dfsRecursively(start: number, end: number, prevList: number[], visited: boolean[]): void {
    visited[start] = true;
    const adjacency = this.adjacencyList[start];
    for (const vertex of adjacency) {
      if (this.dfsFound) {
        return;
      }
      if (start === end) {
        this.dfsFound = true;
        return;
      }
      if (visited[vertex]) {
        continue;
      }
      prevList[vertex] = start;
      this.dfsRecursively(vertex, end, prevList, visited);
    }
  }

  private resolvePath(end: number, prevList: number[]): number[] {
    const result: number[] = [];
    this.resolvePathRecursively(end, prevList, result);
    return result;
  }

  private resolvePathRecursively(vertex: number, prevList: number[], result: number[]): void {
    if (prevList[vertex] !== -1) {
      this.resolvePathRecursively(prevList[vertex], prevList, result);
    }
    result.push(vertex);
  }
}
