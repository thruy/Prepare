console.log(`Heloo world, I'm Hoang learning JS if else.`);

let top4 = ['Real', 'Barca', 'Aletico', 'Sevilla'];
let i = 0;
while(i < top4.length) {
    if (top4[i][0]=='B') console.log(`Top ${i+1}: `, top4[i]);
    else if (top4[i][0]==='R') console.log(`Top ${i+1}: `, top4[i]);
    else if (top4[i].length === 7) {
        console.log(`Top ${i+1}: `, top4[i]);  break;
    }
    console.log(`Check: i=`, i);
    i++;
}