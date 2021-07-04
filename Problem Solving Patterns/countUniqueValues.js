// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in
// the array, but it will always be sorted.

const countUniqueValues = (arr) => {
    if(arr.length <= 1) {
        return arr.length;
    }

    let left = 0;
    let right = 1;

    while(right < arr.length) {
        if(arr[left] === arr[right]) {
            right++;
        } else {
            left++;
            arr[left] = arr[right];
            right++;
        }
    }

    return left + 1;
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4