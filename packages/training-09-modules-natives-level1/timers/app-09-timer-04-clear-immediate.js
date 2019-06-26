'use strict';

let counter = 1;

function execNow(arg) {
  console.log(`${__filename} ${counter} ${arg}`);
  counter++;
}

console.log('A');

const one = setImmediate(execNow, 'one');

console.log('B');

const two = setImmediate(execNow, 'two');

console.log('C');

const three = setImmediate(execNow, 'three');

console.log('D');

clearImmediate(one);

console.log('E');

clearImmediate(two);

// Only three is called

console.log('F');
