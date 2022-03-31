class Graph {
  numberOfNodes: number;
  adjacentList: Object;

  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);

    for (const node of allNodes) {
      const nodeConnections = this.adjacentList[node];
      let connections = "";

      for (const vertex of nodeConnections) {
        connections += `${vertex} `;
      }

      console.log(`${node} --> ${connections}`);
    }
  }
}
