'use strict';

let counter = 1;

function execNow(arg) {
  console.log(`${__filename} ${counter} ${arg}`);
  counter++;

  if (counter > 5) {
    process.exit();
  }
}

const one = setInterval(execNow, 1000, 'one');

const two = setInterval(execNow, 2000, 'two');

const three = setInterval(execNow, 3000, 'three');

clearInterval(one);
clearInterval(two);

// Only three is called
