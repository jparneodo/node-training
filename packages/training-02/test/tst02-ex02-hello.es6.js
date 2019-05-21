'use strict';

// TRAINING Start from node

import { hello } from '../src/index';

import { hello as bonjour } from '../src/index';

import index from '../src';

import { hello as ciao } from '../src';

console.log(hello('hello'));
console.log(bonjour('bonjour'));
console.log(index.hello('index.hello'));
console.log(ciao('ciao'));
