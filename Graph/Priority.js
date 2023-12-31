class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }

  var pq = new PriorityQueue();
  pq.enqueue("B", 8);
  pq.enqueue("c", 5);
  pq.enqueue("D", 2);
  pq.enqueue("B", 3);
  pq.enqueue("Q", 20);
  pq.enqueue("A", 1.5);
  console.log(pq.values)
  console.log(pq.dequeue());
  console.log(pq.dequeue());
  console.log(pq.dequeue());