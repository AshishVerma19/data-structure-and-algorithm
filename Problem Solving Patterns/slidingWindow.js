// SLIDING WINDOW
// This pattern involves creating a window which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.


// Write a function called maxSubarraySum which accepts an array of integers and a 
// number called n. The function should calculate the maximum sum of n consecutive
//  elements in the array.

const maxSubarraySum = (arr, num) => {
    if(arr.length < num) return null;
    let maxSum = 0;
    let tempSum = 0;
    for(let i=0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;
    for(let j=num; j < arr.length; j++) {
        tempSum = tempSum - arr[j - num] + arr[j];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4)) // null