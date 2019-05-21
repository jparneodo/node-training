'use strict';

// TRAINING Start from node

function foo() {
  // TRAINING Which foo function is called below?
  foo();

  function foo() {
    console.log('B');
  }
  console.log('A');
}

foo();
