'use strict';

// TRAINING Start from node

let { hello } = require('../src/index');

let bonjour = require('../src/index').hello;

let index = require('../src');

let ciao = require('../src').hello;

console.log(hello('hello'));
console.log(bonjour('bonjour'));
console.log(index.hello('index.hello'));
console.log(ciao('ciao'));
