const sumRange = (num) => {
    if(num === 1) return 1;

    return num + sumRange(--num);
}

console.log(sumRange(2));
console.log(sumRange(3));
console.log(sumRange(4));
console.log(sumRange(5));
console.log(sumRange(100));