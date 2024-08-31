function noReturn() {
    let x = 10;
}

function yukxReturn() {
    let x = 10;
    return x;
}

let result = noReturn();
let result1 = yukxReturn();

console.log(result);
console.log(result1);

function subtract(a, b) {
    return a - b;
}

let result2 = subtract(10, 5);

console.log(result2);
