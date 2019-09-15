function writeCards(names, event) {
    let arr = [];

    for (let i = 0; i < names.length; i++) {
        arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return arr;
}

function countdown(num) {
    while (num > -1) {
        console.log(num);
        num--;
    }
}