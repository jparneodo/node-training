'use strict';

let ix = 0;

function loop() {
  ix++;
  console.log(`loop ${ix} called`);

  if (ix % 10 === 0) {
    obstruct();
  }
}

function obstruct() {
  let r = 3.14;
  console.log('obstruct');
  for (let i = 2; i < Infinity; i++) {
    if (i % 1000000000 === 0) {
      return;
    }
  }
}

// Start
setInterval(loop, 100);
