// Helper hethod use for collecting odd in a array
const collectOdds = (arr) => {
    let oddArr = [];
    
    function addOdd(arr1) {
        if(arr1.length === 0) return;
        if(arr1[0] % 2 !== 0) {
            oddArr.push(arr1[0]);
        }
        addOdd(arr1.slice(1));
    }

    addOdd(arr);

    console.log(oddArr);
}

//Pure recursion for same code
const pureCollectOdds = (arr) => {
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(pureCollectOdds(arr.slice(1)));

    return newArr;
}

collectOdds([1,2,3,4,5]);
console.log(pureCollectOdds([1,2,3,4,5]));

/* 
Pure Recursion Tips
For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
To make copies of objects use Object.assign, or the spread operator
*/