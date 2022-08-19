var NO_OF_CHARS = 256;

function longestUniqueSubstr(str) {
    var n = str.length;
 
        var res = 0; // result
 
        // last index of all characters is initialized
        // as -1
        var lastIndex = [256];
        lastIndex.fill(-1);
 
        // Initialize start of current window
        var i = 0;
 
        // Move end of current window
        for (var j = 0; j < n; j++) {
 
            // Find the last index of str[j]
            // Update i (starting index of current window)
            // as maximum of current value of i and last
            // index plus 1
            i = Math.max(i, lastIndex[str.charAt(j)] + 1);
 
            // Update result if we get a larger window
            res = Math.max(res, j - i + 1);
 
            // Update last index of j.
            lastIndex[str.charAt(j)] = j;
        }
        return res;
}

var str = "geeksforgeeks";
var len = longestUniqueSubstr(str);
console.log("Result:", len);