console.log(`Helloo, I'm Hoang from HTML`);
let a = {
    name: 'Hoang',
    age: 20,
    school: 'SOICT',
    thongtin : {
        nam : 3,
        GPA : 3.5,
        CPA : 3.3
    }
};
let b = 234;
let c = 'school'
a[c] = 'PBC';
a.diachi = 'Hanoi'
console.log(`Type of a: ${typeof(a)}, name of a: ${a.name}, age of a: ${a.age}, school of a: ${a['school']}, dia chi of a: ${a.diachi}.
Type of b: ${typeof(b)}.`);
console.log(`Information of a: `, a);