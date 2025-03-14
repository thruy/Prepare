console.log(4 + 5 + 'f'); // = 9 + 'f' = 9f
console.log('f' + 4 + 5); // = 'f4' + 5 = f45
// JS cong tu trai qua phai
let a = `Hello, I'm "Hoang" from Javascript!!`;
let b = new String(`Hello, I'm "Hoang" from Javascript!!`); // toc do thuc hien cham hon, => ko nen tao object String
// so sánh 2 đối tượng String thì luôn sai
console.log(`Hello, I'm "Hoang" 
    from Javascript!!`);
console.log(a.length);
console.log(typeof(a), typeof(b));
