console.log("Hello world, I leran Lodash in JS to improve performance");

let subjects = [
    {name: 'Android', tin: 2, lecturer: 'Vui'},
    {name: 'ĐT cho CNTT', tin: 2, lecturer: 'Nga'},
    {name: 'IP Network', tin: 3, lecturer: 'Hoang'},
    {name: 'ATTT', tin: 3, lecturer: 'Duc'},
    {name: 'TTUD', tin: 2, lecturer: 'Sang'},
    {name: 'Network Programming', tin: 2, lecturer: 'Vinh'},
    {name: 'SAD', tin: 2, lecturer: 'Trung'},
    {name: 'Project 2', tin: 2, lecturer: 'Tien'}];

const students = [
    {
        id: 20225191,
        name: "Hoang",
        info: {
            email: "Hoang.nh225191@sis.hust.edu.vn",
            address: {
                city: "Vinh",
                zip: "10001"
            }
        },
        subjects: [
            { name: "Math", grade: 90 },
            { name: "Physics", grade: 85 }
        ]
    },
    {
        id: 20225167,
        name: "Bảo",
        info: {
            email: "Bao.lt225167@sis.hust.edu.vn",
            address: null 
        },
        subjects: [] 
    },
    {
        id: 3,
        name: "Hưng",
        info: null, // Không có thông tin cá nhân
        subjects: [
            { name: "History" } // Không có điểm số
        ]
    }
];

/*1. _.get: truy xuất một giá trị từ một đối tượng (object) theo đường dẫn (path)
    cú pháp:  _.get(object, path, [defaultValue])
        object: Đối tượng cần lấy giá trị.
        path: Đường dẫn đến thuộc tính cần lấy (dùng chuỗi "a.b.c" hoặc mảng ["a", "b", "c"]).
        [defaultValue]: Giá trị mặc định nếu không tìm thấy thuộc tính.
*/
let a = _.get(subjects[0], "name");
console.log("Tên môn đầu tiên: ", a);
console.log("Có thưc hành:", _.get(subjects[1], "TH"));
console.log("Số tin môn cuối: ", _.get(subjects, ['7', 'tin']));
console.log("Phong hoc SAD: ", _.get(subjects, '6.phong', 'TC'));

console.log("Email sv đầu tiên: ", _.get(students, '0.info.email', 'Không có email'));
console.log("Thanh phố sv thứ 2: ", _.get(students, '1.info.adress.city', "Chưa có thành phố"));
console.log("Điểm môn đầu tiên sv thứ 3: ", _.get(students, '2.subjects.0.grade'));
console.log("Tên môn học đầu tiên sv thứ 2: ", _.get(students, '1.subject.0.name', 'Không có môn học'));

/*2. _.set: đặt một thuộc tính với giá trị bạn mong muốn
    cú pháp: _.set(object, path, value)
    */
_.set(subjects, '1.TH', true);
console.log(subjects[1]);

_.set(students[2], 'subjects.1', {name: 'Math', grade: 10});
_.set(students[1].address, '', {city: "TC", zip: 10002});
_.set(students[2], 'id', 20225334)
console.log(students[1].address);
console.log(students[2].subjects);

//3. _.findKey: trả về key của element đầu tiên thoả mãn được điều kiện của hàm callback ở tham số thứ 2. => trả về chỉ số
//     cú pháp: _.findKey(object, [predicate=_.identity])
//         object: đối tượng
//         [predicate=_.identity]: điều kiện tìm kiếm (có thể là hàm)

console.log("Môn 3 tín: ", _.findKey(subjects, {'tin': 3}));
let k = _.findKey(students, x => x.info.address.city == "Vinh")
console.log("HS ở Vinh: ", students[k].info);

// 4. _.mapValue: trả về 1 object mới bằng cách lặp qua các element của object và value mới là kết quả xử lý trong hàm callback ở tham số thứ 2.
//     cú pháp: _.mapValues(object, [iteratee=.identity])
            // object: đối tượng
            // iteratee:(value, key, object): value: Giá trị của từng thuộc tính, key: Tên thuộc tính, object: Chính object gốc.
//     giống hàm map trong JS

let tinhocphi = _.mapValues(subjects, x => {
    return {
        name: x.name,
        tin: x.tin*1.5
    }
});
console.log("Sô tín học phí: ", tinhocphi);