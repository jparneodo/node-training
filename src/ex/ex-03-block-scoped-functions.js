'use strict';

function foo () {
  foo(); // Which foo function called ?
  function foo () {
    console.log('B');
  }
  console.log('A');
}

foo();
