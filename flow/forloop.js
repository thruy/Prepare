console.log(`Hello world, I'm Hoang, learning JS for loops.`);

//for (let i=0; i<4; i++) {
//    console.log('Check i = ', i);
//}

let nha = ['Liverpool', 'Arsenal', 'MC', 'Chelsea', 'Nottingham', 'Aston Villa', 'Brighton'];
let name = "Ngô Hữu Hoàng"
let i = 0;
console.log('\nVong lap for: ');
for ( ;i<=4 ; i++) {
    console.log(`Doi thu ${i+1} la: ${nha[i]}`);
}

// for in Loop: => truy cap den chi so cua cac phan tu trong mang
console.log('\nVong lap for in: ');
for (let i in nha) {
    console.log(`Doi thu ${i+1} la: ${nha[i]}`);
}

// vong lap Array.forEach():
console.log('\nVong lap Array.forEach');
function print( value, i) {
    console.log(`Doi thu ${i+1} la: ${value}`);
}
nha.forEach(print);
// ham function trong forEach nhan 3 tham so: function(value, index, array) voi value(gia tri cua phan tu), index(chi so cua phan tu), array(ban than mang)

// vong lap for of => truy cap den phan tu trong mang
console.log('\nVong lap for of: ')
for (let i of nha) {
    console.log(`Doi thu ${i+1} la: ${nha[i]}`);
}

for (let i of name) { 
    console.log(i);
}