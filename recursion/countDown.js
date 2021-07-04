// print the number till given number

const countDown = (num) => {
    if(num === 0) {
        console.log('all done!');
        return;
    }

    console.log(num);
    countDown(--num);
}

countDown(5);