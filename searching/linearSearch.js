/*
This function accepts an array and a value
Loop through the array and check if the current array element is equal to the value
If it is, return the index at which the element is found
If the value is never found, return -1

big(O) = N
*/

const linearSearch = (arr, value) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1,23,4,5,34,2,23,40], 4));

