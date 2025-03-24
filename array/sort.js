console.log(`Hello world, I'm finding how to sort array in JS`);
// ham sort tu dong chuyen doi cac phan tu sang dang string va sap xep theo thu tu trong bang ma

let priemerLeage = ['Man United', 'Man City', 'Liverpool', 'Arsenal', 'Aston Villa', 'Tottenham', 'Chelsea', 'Broghton'];
priemerLeage.sort();
console.log(priemerLeage);

let integers = [1, 1000, 3, 25, 9, 57];
integers.sort(); // sap xep theo chuoi string
console.log(integers);
integers.sort((a, b) => a - b); // sap xep tang dan
console.log(integers);
integers.sort((a, b) => b - a); // sap xep giam dan
console.log(integers);
