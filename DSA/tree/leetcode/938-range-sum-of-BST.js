/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

 var rangeSumBST = function(root, low, high) {
    let totalSum = 0;
    const queue = [root];

    while(queue.length > 0) {
        const currentNode = queue.shift();
        if(currentNode.val >= low && currentNode.val <= high) {
            console.log(currentNode.val);
            totalSum +=  currentNode.val;
        }
        if(currentNode.left) queue.push(currentNode.left);      
        if(currentNode.right) queue.push(currentNode.right);
    }
    return totalSum;
};

const a = new Node(10);
const b = new Node(5);
const c = new Node(15);
const d = new Node(3);
const e = new Node(7);
const f = new Node(null);
const g = new Node(18);

a.left = b;
b.left = d;
b.right = e;
a.right = c;
c.elgt = f;
c.right = g;

const result = rangeSumBST(a, 7, 15);
console.log(result);