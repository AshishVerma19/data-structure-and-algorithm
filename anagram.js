// Given two strings, write a function to determine if the second string 
// is an anagram of the first. An anagram is a word, phrase, or name formed
//  by rearranging the letters of another, such as cinema, formed from iceman

// First Solution
function validAnagram1(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    let map1 = {};
    let map2 = {};
    for(let key of str1) {
        map1[key] = (map1[key] || 0) + 1;
    }
    for(let key of str2) {
        map2[key] = (map2[key] || 0) + 1;
    }

    for(let key in map1) {
        if(!(key in map2)) {
            return false
        }

        if(map1[key] !== map2[key]) {
            return false;
        }
    }
    return true;
}

// Better solution
function validAnagram(str1, str2) {
    // check if both string lenght are different
    if(str1.length !== str2.length) {
        return false;
    }

    //create a map
    let lookup = {};

    // for first string iterate and add frequency of every
    // character
    for(let key of str1) {
        lookup[key] = (lookup[key] || 0) + 1;
    }

    // iterate over second string check if it exist in map.
    // if not then return false
    // if present then decrease its count
    for(let key of str2) {
        if(!lookup[key]) {
            return false;
        }

        lookup[key] -= 1;
    }
    return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza') )// false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car"))// false
console.log(validAnagram('awesome', 'awesom') )// false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
