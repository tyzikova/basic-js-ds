const { NotImplementedError } = require("../extensions/index.js");

//const { Node } = require("../extensions/list-tree.js");

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

module.exports = class BinarySearchTree {
    constructor() {
        this.tree = null;
    }

    root() {
        return this.tree;
    }

    add(data) {
        this.tree = addWithin(this.tree, data);

        function addWithin(node, data) {
            if (!node) {
                return new Node(data);
            }
            if (node.data === data) {
                return node;
            }
            if (data < node.data) {
                node.left = addWithin(node.left, data);
            } else {
                node.right = addWithin(node.right, data);
            }
            return node;
        }
    }

    has(data) {
        return searchWithin(this.tree, data);

        function searchWithin(node, data) {
            if (!node) {
                return false;
            }
            if (node.data === data) {
                return true;
            }
            return data < node.data ?
                searchWithin(node.left, data) :
                searchWithin(node.right, data);
        }
    }

    find(data) {
        return findInner(this.tree, data);

        function findInner(node, data) {
            if (!node) {
                return null
            }
            if (node.data === data) {
                return node
            }
            if (node.data < data) {
                return findInner(node.right, data)
            } else {
                return findInner(node.left, data)
            }
        }
    }

    remove(data) {
        this.tree = removeNode(this.tree, data);

        function removeNode(node, data) {
            if (!node) {
                return null;
            }
            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (node.data < data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {

                if (!node.left && !node.right) {
                    return null;
                }

                if (!node.left) {
                    node = node.right;
                    return node;
                }

                if (!node.right) {
                    node = node.left;
                    return node;
                }

                let minFromRight = node.right;
                while (minFromRight.left) {
                    minFromRight = minFromRight.left;
                }
                node.data = minFromRight.data;

                node.right = removeNode(node.right, minFromRight.data);

                return node;
            }
        }
    }

    min() {
        if (!this.tree) {
            return;
        }
        let node = this.tree;
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    max() {
        if (!this.tree) {
            return;
        }
        let node = this.tree;
        while (node.right) {
            node = node.right;
        }
        return node.data;
    }
}


// module.exports = class BinarySearchTree {
	// constructor() {
		// this.top = null;
		// this.dataArr = [];
	// }
  // root() {
    // return this.top;
  // }

  // add(data) {
	// this.dataArr.push(data);
	
	// const newItem = new Node(data);
	
	// if (this.top){
		// this.addItem(newItem, this.top);
	// }else{
		// this.top = newItem;
	// }
  // }
	// addItem(item, top){
	// if (item.data > top.data && !top.right){
		// top.right = item;
	// }
	// if (item.data > top.data && top.right){
		// this.addItem(item, top.right);
	// }
	// if (item.data < top.data && !top.left){
		// top.left = item;
	// }
	// if (item.data < top.data && top.left){
		// this.addItem(item, top.left);
	// }
// }
	// has(data) {
    // return Boolean(this.find(data));
  // }

	// find(data) {
    // return this.findItem(data, this.top);
  // }	

	// findItem(data, top){
	// if (top.data === data){
		// return top;
	// }
	// if (data > top.data && top.right){
		// return this.findItem(data, top.right);
	// }
	// if (data < top.data && top.left){
		// return this.findItem(data, top.left);
	// }
	// return null;
// }

  // remove(data) {
    // this.top = null;
	// this.dataArr = this.dataArr.filter(d => d !== data);
	// this.dataArr.forEach(d => this.add(d));
  // }

  // min() {
	  // const minObj = {min: this.top.data};
		// this.minItem(minObj, this.top);
			// return minObj.min;
  // }

	// minItem(minObj, top){
	// if (minObj.min > top.data){
		// minObj.min = top.data;
	// } 
	// if (top.left){
		// this.minItem(minObj, top.left)
	// }
	// if (top.right){
		// this.minItem(minObj, top.right);
	// }
// }
	
  // max() {
   // const maxObj = {max: this.top.data};
	// this.maxItem(maxObj, this.top);
			// return maxObj.max;
  // }

// maxItem(maxObj, top){
	// if (maxObj.max < top.data){
		// maxObj.max = top.data;
	// } 
	// if (top.left){
		// this.maxItem(maxObj, top.left)
	// }
	// if (top.right){
		// this.miaxtem(maxObj, top.right);
		// }
	// }
// }