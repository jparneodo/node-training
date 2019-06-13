'use strict';

let counter = 1;

function execNow(arg) {
  console.log(`${__filename} ${counter} ${arg}`);
  counter++;
}

setImmediate(execNow, 'one');

setImmediate(execNow, 'two');

setImmediate(execNow, 'three');
