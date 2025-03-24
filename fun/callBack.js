console.log(`Hello world, this is callback in JS, and also setTimeout and setInterval`);
let sum = (a, b, callback) => {
    let tong = a+ b;
    //callback(tong);
    //setTimeout(() => {
    //    callback(tong)
    //}, 3000);
    let i = 0;
    let timer = setInterval(() => {
        callback(tong);
        i++;
        if(i===5) clearInterval(timer);
        
    }, 1000);
}

let printSum = (message) => {
    console.log('Sum = ', message);
} 
sum(6, 9, printSum);