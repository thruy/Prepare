console.log('Hello world, this is return in JS')
function square(a, b, x) {
    console.log(a);
    console.log(b);
    if (x===0) return;
    console.log(x);
    return Math.sqrt(a*a + b*b);
}

console.log(square(3, 4, 0));