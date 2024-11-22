
//console.log(global); 


global.setTimeout(() => {
    console.log('in the timeout')
    clearInterval(int);
}, timeout);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

console.log(_direname);
console.log(_filename);
