// //const range = (start, stop, step) => Array.from({length:(stop-start)/step+1}, (_,i) => start + (i*step));

// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];



// function findNemo(items) {
//     let t0 = performance.now();
//     items.forEach((item) => {
//         if(item === 'nemo') {
//             console.log(item);
//         }
//     });
//     let t1 = performance.now();
//     console.log('Call to find nemo tool ' + (t1-t0)/1000 + ' milliseconds');
// }

//findNemo(nemo);
//findNemo(everyone);
//const large = range(1,100000,1).fill('nemo');
//findNemo(large);

/*
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


nums = [2, 7, 9, 1, 0] target = 9

Is there any negative or positive numbers?
Is it always we ahve a solution?

If there is no solution, then what we want to return?


Input: num[] = result is null
Input: num[2,7, 9, 1 ,2 3, 5] = result is [0,1]


*/



var twoSum = function(nums, target) {
    
};

const twoSumBruteForce = (nums, target) => {

        if(nums === undefined || nums === null) {
            return null;
        }

        if(Array.isArray(nums) && nums.length < 1) {
            return null;
        }

        for(let p1=0; p1<nums.length; p1++) {
            const findSumValue = target - nums[p1];
            for(let p2=p1+1; p2<nums.length; p2++) {
                   if(findSumValue === nums[p2]) {
                       return [p1,p2];
                   } 
            }
        }
        return null;
}
// O(n*n) = O(n^2)

const findTwoSum = (nums, target) => {
    if(nums === undefined || nums === null) {
        return null;
    }

    if(Array.isArray(nums) && nums.length < 1) {
        return null;
    }

    const mapIndexValue = new Map();
    for(let p =0; p<nums.length; p++) {
        console.log(nums[p], mapIndexValue.has(9));
        if(!mapIndexValue.has(nums[p])) {
            const value = target - nums[p];
            console.log(value);
            mapIndexValue[p] = value;
        } else {
            return [mapIndexValue[p],p]
        }
    } 
    console.log(mapIndexValue);
    return null;
}


let nums = [2,7,9,2,3,4,2];
let target = 9;
//const result = twoSumBruteForce(nums, target);
const result = findTwoSum(nums, target);
console.log(result);
