'use strict';

let counter = 1;

function execNow(arg) {
  console.log(`${__filename} ${counter} ${arg}`);
  counter++;
}

setTimeout(execNow, 1000, 'one');

setTimeout(execNow, 2000, 'two');

setTimeout(execNow, 3000, 'three');
