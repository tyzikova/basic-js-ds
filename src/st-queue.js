const { NotImplementedError } = require("../extensions/index.js");

//const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

module.exports = class Queue{
	constructor(){
		this.top = null;
		this.length = 0;
	}
	
	getUnderlyingList(){
		return this.top;
	}
	
	enqueue(value){
	  if(this.length === 0) {
      this.top = new ListNode(value);
    } else {
      let current = this.top;
      while(current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
    this.length++;
  } 

  dequeue(){
	  const first = this.top.value;
	  this.top = this.top.next;
	  return first;
	}
}
