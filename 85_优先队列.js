// 优先队列是一种元素带权重的队列，
// 你可以往队列中添加和删除元素，但是删除元素的时候会把优先级最高的元素删除。例如：
class PriorityQueue {
  constructor() {
    this.arr = []
  }
  add (item) {
    /* TODO */
    this.arr.push(item)
  }
    
  remove () {
    /* TODO */
    let max = Math.max(...this.arr)
    this.arr.splice(this.arr.indexOf(max), 1)
    return max
  }
}