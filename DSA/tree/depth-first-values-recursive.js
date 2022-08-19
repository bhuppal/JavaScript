class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValuesRecursive = (root) => {
    if (result === null) return [];
    const leftValues = depthFirstValuesRecursive(root.left);
    const rightValues = depthFirstValuesRecursive(root.right);
    const result = [root.val, ...leftValues,] 
}