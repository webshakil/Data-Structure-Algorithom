class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
      this.addVertex(v1); // Ensure v1 exists in the adjacencyList
      this.addVertex(v2); // Ensure v2 exists in the adjacencyList
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }
  
  let g = new Graph();
  
  g.addVertex("Dallas");
  g.addVertex("Tokeyo");
  g.addVertex("Aspen");
  g.addEdge("Dallas", "Tokeyo");
  g.addEdge("Dallas", "Aspen")
  
  
  console.table(g);
  

