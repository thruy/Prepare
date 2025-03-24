console.log('Hello world, this is compare function vs method in JS')
// arrow function
let convertToFarenhait = (x) => 1.8*x + 32;

console.log(`0 do C = ${convertToFarenhait(0)} do F`)

// method: function trong 1 doi tuong hoac torng class
let university = {
    name: 'SOICT',
    address: 'B1',
    getName: function() {return this.name;}
}
console.log(`University's name: `, university.getName());