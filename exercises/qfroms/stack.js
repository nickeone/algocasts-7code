class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    console.log('push');
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
