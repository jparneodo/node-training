'use strict';

let counter = 1;

function execNow(arg) {
  console.log(`${__filename} ${counter} ${arg}`);
  counter++;
}

const one = setImmediate(execNow, 'one');

const two = setImmediate(execNow, 'two');

const three = setImmediate(execNow, 'three');

clearImmediate(one);
clearImmediate(two);

// Only three is called
