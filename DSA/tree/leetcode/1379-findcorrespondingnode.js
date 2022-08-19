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


var rangeSumBST = function(original, cloned, num) {  
    if(!cloned) return null;
    if(original.val === cloned.val && num === original.val) return cloned.val;
    return rangeSumBST(original.left, cloned.left, num) || rangeSumBST(original.right, cloned.right, sum);
}


//  var rangeSumBST = function(original, target, num) {    
//     const queueOrignal = [original];
//     const queueTarget = [target];
//     while(queueOrignal.length > 0 && queueTarget.length > 0) {
//         const currentOriginalValue = queueOrignal.shift();
//         const currentTargetValue = queueTarget.shift();
//         if (currentOriginalValue.val == num && currentOriginalValue.val === currentTargetValue.val) return currentTargetValue.val;        

//         if(currentOriginalValue.left) queueOrignal.push(currentOriginalValue.left);
//         if(currentOriginalValue.right) queueOrignal.push(currentOriginalValue.right);
//         if(currentTargetValue.left) queueTarget.push(currentTargetValue.left);
//         if(currentTargetValue.right) queueTarget.push(currentTargetValue.right);
//     }
// };

const original = new Node(10);
const b = new Node(5);
const c = new Node(15);
const d = new Node(3);
const e = new Node(7);
const f = new Node(null);
const g = new Node(18);

original.left = b;
b.left = d;
b.right = e;
original.right = c;
c.elgt = f;
c.right = g;

const cloned = original;

const result = rangeSumBST(original, cloned, 3);
console.log(result);