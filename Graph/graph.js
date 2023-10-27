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
      //console.log("this.adjacencyList==>",this.adjacencyList)
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
       
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
  //   depthFirstRecursive(start){
  //     const result = [];
  //     const visited = {};
  //     const adjacencyList = this.adjacencyList;
  //    (function dfs(vertex){
  //         if(!vertex) return null;
  //         visited[vertex] = true;
  //         result.push(vertex);
  //         adjacencyList[vertex].forEach(neighbor => {
  //             if(!visited[neighbor]){ //if visited ignore the next line
  //                 return dfs(neighbor)
  //             }
  //         });
  //     })(start);

  //     return result;
  // }

//   depthFirstIterative(start){
//     const stack = [start];
//     const result = [];
//     const visited = {};
//     let currentVertex;

//     visited[start] = true;
//     while(stack.length){
//         currentVertex = stack.pop();
//         result.push(currentVertex);

//         this.adjacencyList[currentVertex].forEach(neighbor => {
//            if(!visited[neighbor]){
//                visited[neighbor] = true;
//                stack.push(neighbor)
//            } 
//         });
//     }
//     return result;
// }
breadthFirst(start){
  const queue = [start];
  const result = [];
  const visited = {};
  let currentVertex;
  visited[start] = true;

  while(queue.length){
    console.log("queue==>", queue)
      currentVertex = queue.shift();
      result.push(currentVertex);
     

      this.adjacencyList[currentVertex].forEach(neighbor => {
          if(!visited[neighbor]){
              visited[neighbor] = true;
              queue.push(neighbor);
          }
      });
  }
  return result;
}
  }
  
  let g = new Graph();
 
  // g.addVertex("Dallas");
  // g.addVertex("Tokyo");
  // g.addVertex("Aspen");
  // g.addVertex("Los Angeles");
  // g.addVertex("Hong Kong")
  // g.addEdge("Dallas", "Tokyo");
  // g.addEdge("Dallas", "Aspen");
  // g.addEdge("Hong Kong", "Tokyo");
  // g.addEdge("Hong Kong", "Dallas");
  // g.addEdge("Los Angeles", "Hong Kong");
  // g.addEdge("Los Angeles", "Aspen");
  // g.removeVertex("Hong Kong")
  // g.removeVertex("Dallas")

  //Graph Travarsal
  g.addVertex("A")
  g.addVertex("B")
  g.addVertex("C")
  g.addVertex("D")
  g.addVertex("E")
  g.addVertex("F")


  g.addEdge("A", "B")
  g.addEdge("A", "C")
  g.addEdge("B","D")
  g.addEdge("C","E")
  g.addEdge("D","E")
  g.addEdge("D","F")
  g.addEdge("E","F")
  //console.log("g.depthFirstRecursive()===>",g.depthFirstRecursive("A"))
  //console.log(g.depthFirstIterative("A"))
  console.log(g.breadthFirst("A"))
  console.table(g);
  
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F



  //DFS(vertex):
  //if vertex is empty
       //return(this is base case)
//mark vertex as visited
//add vertex to result list
//for each neighbor in verted's neighbors:
       //if neighbor is not visited:
       //recursively call DFS on neighbor
