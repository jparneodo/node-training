'use strict';

let counter = 1;

function execNow(arg) {
  console.log(`${__filename} ${counter} ${arg}`);
  counter++;
}

setTimeout(execNow, 5000, 'one');

console.log('A');

setTimeout(execNow, 15000, 'three');

console.log('B');

setTimeout(execNow, 10000, 'two');

console.log('C');
