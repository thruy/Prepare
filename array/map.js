console.log(`Hello world, I'm learning JS with map`);
// map là vòng lặp giống như for
// map tao ra ban sao cua du lieu va thao tac tren ban sao do, du lieu ban dau khong bi anh huong
// cac tham so dau vao cung giong voi find va filter
let arr = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ];
let subjects = [
    {name: 'Android', tin: 2, lecturer: 'Vui'},
    {name: 'ĐT cho CNTT', tin: 2, lecturer: 'Nga'},
    {name: 'IP Network', tin: 3, lecturer: 'Hoang'},
    {name: 'ATTT', tin: 3, lecturer: 'Duc'},
    {name: 'TTUD', tin: 2, lecturer: 'Sang'},
    {name: 'Network Programming', tin: 2, lecturer: 'Vinh'},
    {name: 'SAD', tin: 2, lecturer: 'Trung'},
    {name: 'Project 2', tin: 2, lecturer: 'Tien'}];

let chinhphuong = arr.map((item, i) => {
    item = item * item;
    return item;
});
console.log(`arr: `, arr);
console.log('10 so chinh phuong dau tien: ', chinhphuong);
console.log('10 so lap phuong dau tien: ', arr.map((item) => item*item*item));

let setTH = subjects.map((sub) => {
    return {
        name: sub.name,
        tin: sub.tin,
        lecturer: sub.lecturer,
        hasPractice: sub.name == 'TTUD' || sub.name == 'ĐT cho CNTT' || sub.name == 'IP Network'
    };
});
console.log(setTH)