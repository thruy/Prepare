console.log(`Hello world, I'm Hoang learning JS`);
switch (new Date().getDay()) { // kiem tra thu 
    case 0: console.log('Sunday');
    case 1: console.log('Monday');
    case 2: case 3: case 4: case 5: console.log('Weekday');
    case 6: console.log('Weekend');
    default: break;
    
}