console.log(`Xin chao tu HTML`);
let person1 = {
    name : "Hoang",
    age : 20,
    school : "SOICT"
};
let person2 = {
    name : "Thao",
    age : 20,
    school : "BA"
};

let subjects = ['OOP', 'ATTT', person1, 'Computer Network'];
subjects[0] = 'Data base';
console.log(`Type of person: ${typeof(person1)}, has a few infor: `, person1);
console.log(`Type of subjects: ${typeof(subjects)}, has a few infor: `, subjects);
let students = [person1, person2];
console.log(`Thong tin cac sinh vien: `, students);
subjects.pop
console.log('Thong tin mon hoc: ', subjects);