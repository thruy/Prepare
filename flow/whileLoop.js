console.log(`Hello world from HTML, I'm learning while loop in JS.`);

let big6 = ['Arsenal', 'Chelsea', 'Liverpool', 'MC', 'MU', 'Tottenham'];
var i = 0;
while(i < big6.length) {
    console.log(`Club ${i+1} in BIG6: `, big6[i]);
    i++;
}

console.log(i); i = 0;
do {
    console.log(`Club ${i+1} in BIG6: `, big6[i]);
    i++
} while (i<0);