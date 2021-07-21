/**
 * Suppose you want to count the number of times a smaller string appears in a longer string
   straightforward approach involves checking pairs of characters individually
 */

const stringSearch = (s1, s2) => {
    let count = 0;

    for(let i = 0; i < s1.length; i++) {
        for(let j = 0; j < s2.length; j++) {
            if(s2[j] !== s1[i + j]) {
                break;
            }

            if(j === s2.length - 1) count ++;
        }
    }

    return count;
}

console.log(stringSearch('abcabc', 'abd'));