const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
	constructor() {
		this.top = null;
		this.dataArr = [];
	}
  root() {
    return this.top;
  }

  add(data) {
	this.dataArr.push(data);
	
	const newItem = new Node(data);
	
	if (this.top){
		this.addItem(newItem, this.top);
	}else{
		this.top = newItem;
	}
  }
	addItem(item, top){
	if (item.data > top.data && !top.right){
		top.right = item;
	}
	if (item.data > top.data && top.right){
		this.addItem(item, top.right);
	}
	if (item.data < top.data && !top.left){
		top.left = item;
	}
	if (item.data < top.data && top.left){
		this.addItem(item, top.left);
	}
}
	has(data) {
    return Boolean(this.find(data));
  }

	find(data) {
    return this.findItem(data, this.top);
  }	

	findItem(data, top){
	if (top.data === data){
		return top;
	}
	if (data > top.data && top.right){
		return this.findItem(data, top.right);
	}
	if (data < top.data && top.left){
		return this.findItem(data, top.left);
	}
	return null;
}

  remove(data) {
    this.top = null;
	this.dataArr = this.dataArr.filter(d => d !== data);
	this.dataArr.forEach(d => this.add(d));
  }

  min() {
	  const minObj = {min: this.top.data};
		this.minItem(minObj, this.top);
			return minObj.min;
  }

	minItem(minObj, top){
	if (minObj.min > top.data){
		minObj.min = top.data;
	} 
	if (top.left){
		this.minItem(minObj, top.left)
	}
	if (top.right){
		this.minItem(minObj, top.right);
	}
}
	
  max() {
   const maxObj = {max: this.top.data};
	this.maxItem(maxObj, this.top);
			return maxObj.max;
  }

maxItem(maxObj, top){
	if (maxObj.max < top.data){
		maxObj.max = top.data;
	} 
	if (top.left){
		this.maxItem(maxObj, top.left)
	}
	if (top.right){
		this.miaxtem(maxObj, top.right);
		}
	}
}