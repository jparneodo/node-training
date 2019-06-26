'use strict';

// TRAINING Add changes here to import this module with CJS format

// Start commands:
//  npm install esm
//  node -r esm --experimental-modules app-1-from-esm.mjs

// hello from './mymodule' using destructuring
import xxx from './mymodule';

// bonjour from './mymodule' hello property
import xxx from './mymodule';

// hello as ciao from './mymodule/';
import xxx from './mymodule';

// index from './mymodule/index' as full module
import xxx from './mymodule';

console.log(hello('hello'));
console.log(bonjour('bonjour'));
console.log(ciao('ciao'));
console.log(index.hello('index.hello'));
console.log(index.world('index.world'));
