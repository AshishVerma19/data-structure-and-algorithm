/*
Binary search is a much faster form of search
Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
Binary search only works on sorted arrays!
*/

const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right)/2);

        if (arr[mid] === val) {
            return mid;
        } else if (arr[mid] > val) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

//console.log(binarySearch([1,2,3,4,5,6,7], 1));
console.log(binarySearch([1], 2));