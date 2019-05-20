"use strict";

function foo() {
  foo();
  function foo() {
    console.log("B");
    return 2;
  }
  console.log("A");
  return 1;
}

foo();
