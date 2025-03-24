console.log(`Hello world, this is declare func in JS`);

function sum(a = 1, b = 1) {
    return a + b;
}

console.log(`sum(34, 4.5): `, sum(34, 4.5));
console.log(`sum(1, 1000): `, sum(1000));