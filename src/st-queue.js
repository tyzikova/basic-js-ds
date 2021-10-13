import { NotImplementedError } from '../extensions/index.js';

import { ListNode } from '../extensions/list-node.js';

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
export default class Queue{
	constructor(){
		this.top = null;
		this.end = null;
	}
	
	getUnderlyingList(){
		return this.top;
	}
	
	enqueue(value){
	  const newItem = new ListNode(value);
	  if (this.top){
		  this.end.next = newItem;
		  this.end = this.end.next;
	  }else{
		  this.top = newItem;
		  this.end = newItem;
	  }
  } 

  dequeue(){
	  const first = this.top;
	  this.top = this.top.next;
	  return first.value;
	}
}
