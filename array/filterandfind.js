console.log(`Hello world, I'm learning filter and find array in JS`);
// filter: trả về nhiều phần tử thỏa mãn điều kiện, nếu ko trả về mảng rỗng
// find: trả về phần tử đầu tiên thỏa mãn điều kiện, nếu không trả về undefined

let songuyen = [0, 3, 5, 45, 4, 64, 9874, 98];
let subjects = [
    {name: 'Android', tin: 2, room: 'TC-412'},
    {name: 'ĐT cho CNTT', tin: 2, room: 'D9-201'},
    {name: 'IP Network', tin: 3, room: 'TC-305'},
    {name: 'ATTT', tin: 3, room: 'TC-412'},
    {name: 'TTUD', tin: 2, room: 'TC-412'},
    {name: 'Network Programming', tin: 2, room: 'TC-412'},
    {name: 'SAD', tin: 2, room: 'TC-312'},
    {name: 'Project 2', tin: 2, room: ''}];

let loc1 = songuyen.filter((item, index) => {
    console.log(`Chi so: ${index}, phan tu: ${item}`);
    return item && item > 5 && item < 1000;
});
// hàm function trong filter nhận 3 tham số: item(phần tử của mảng), index(chỉ số của mảng), arr(bản thân mảng)
// nếu viết thiếu tham số thì hàm nhận các tham số đã viết

let loc2 = songuyen.filter((item) => item > 99 && item < 100);

let loc3 = songuyen.filter(loc);
function loc(x) {return x>5 && x < 100;}

let loc4 = subjects.filter((item) => item.room[0] == 'T' && item.room[1] == 'C');
console.log('Filter:\n');
console.log(loc1);
console.log(loc2);
console.log(loc3);
console.log(loc4);

console.log(`Find: \n`);
console.log(songuyen.find(loc));
let tim1 = songuyen.find((item) => item>99 && item<100);

function tim(x) {
    return x.room = 'TC-412';
}
let tim2 = subjects.find(tim);
console.log(tim1)
console.log(tim2)