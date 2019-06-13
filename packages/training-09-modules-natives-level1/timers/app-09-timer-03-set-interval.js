'use strict';

let counter = 1;

function execNow() {
  console.log(`${__filename} ${counter}`);
  counter++;

  if (counter > 5) {
    process.exit();
  }
}

setInterval(execNow, 1000);
