'use strict';

let counter = 1;

function execNow(arg) {
  console.log(`${__filename} ${counter} ${arg}`);
  counter++;
}

const one = setTimeout(execNow, 1000, 'one');

const two = setTimeout(execNow, 2000, 'two');

const three = setTimeout(execNow, 3000, 'three');

clearTimeout(one);
clearTimeout(two);

// Only three is called
