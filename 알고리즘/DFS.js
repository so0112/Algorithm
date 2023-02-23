const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const BFS = (graph, startNode) => {
  const visited = [];
  const needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit.push(...graph[node].reverse());
    }
  }
  return visited;
};

console.log(BFS(graph, "A"));
