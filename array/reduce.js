console.log(`Hello world, I'm learning array.reduce in JS`);
/* cú pháp: reduce(callbackFn)
            reduce(callbackFn, initialValue) 
hàm chạy qua các phần tử trong mảng
hàm callbackFn có 4 tham số:
    accumulator: Giá trị tích lũy được từ lần gọi callbackFn trước. Trong lần gọi đầu, accumulator = initialValue nếu initialValue được chỉ định; nếu không, giá trị là array[0].
    currentValue: Giá trị phần tử hiện tại. Trong lần gọi đầu, currentValue = array[0] nếu initialValue được chỉ định; nếu không, giá trị là array[1].
    currentIndex: Chỉ số phần tử hiện tại. Trong lần gọi đầu, currentIndex = 0 nếu initialValue được chỉ định; nếu không, giá trị là 1.
    array: noi hàm reduce được gọi
*/

let ar = [11, 12, 13, 14, 15, 16];
ar.reduce((sum, currentNum, index) => {
    let returnResult = sum + currentNum;
    console.log(`sum: ${sum}, currentNum: ${currentNum}, index: ${index}, return result: ${returnResult}`);
    return returnResult;
}, 0)


let getMax = (a, b) => Math.max(a, b);

console.log([1, 100, 34].reduce(getMax, 50));
console.log([1, 45, 34].reduce(getMax, 50));
console.log([].reduce(getMax, 60));
console.log([1, 130, 34, 35, 56, 88].reduce((prevnum, curnum) => {
    return (prevnum > curnum) ? prevnum : curnum;
}));

let point = [
    {x: 1, y: 2},
    {x: 3, y: 4},
    {x: 5, y: 1},
    {x: 7, y: 0},
    {x: 4, y: 9}]
let sumX = point.reduce((sum, point) => sum + point.x, 0);
console.log(`Tong hoanh do cua cac diem: ${sumX}`);