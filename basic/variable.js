console.log(`Hello, I'm "Hoang" from Javascript!!`);

// khai báo biến trong JS: dùng let hoặc var
let a = 4;
let x = 4.5;
// string: có thể dùng 3 kiểu dấu nháy
a = 'Hoang';
a = "Hoang Huu";
a = `Huu Hoang`;
let b = x + "bốn chấm"; // = "4.5" + "bốn chấm"
let c = x + 3 + "Bốn chấm";  // khac với "Bốn chấm" + x + 3
let d = "Bốn chấm" + x + 3;
console.log(b);
console.log(c);
console.log(d);
// So lon: 
let e = 1e5;
e = 12e-5;
console.log('Test string: ', 'a = ', a, ', x = ', x, ', e = ', e);
console.log('Test string: ' + 'a = ' + a + ', x = ' + x + ', e = ' + e);
let f = BigInt(`2298345348564436846845364983245344343`);
console.log(f);
// kiểu boolean
let y = 5, z = 6;
console.log('if x = y ?', x==y);
// Mang:  su dung dau [ ], chi so bat dau bang so 0
let n = [1, 2, 3, 5, "a"];
n.push("fb");
console.log(n);
// Hang so: dung const
const g = 34;