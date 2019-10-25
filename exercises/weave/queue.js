// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
     this.data.unshift(record);
    console.log(this.data);
    return this.data;
  }
  remove() {
    return this.data.pop();
  }
  peek(){
    console.log(this.data[this.data.length - 1]);
    return this.data[this.data.length - 1];
  }
}

// const q = new Queue();
// q.add(1);
// q.add(2);
// q.add(3);
// q.peek();


module.exports = Queue;
