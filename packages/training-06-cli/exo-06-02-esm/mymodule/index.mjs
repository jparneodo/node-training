'use strict';

// TRAINING Add changes here to export this module in ESM format

export function hello(info) {
  return 'hello:' + info;
}

export function world(info = '') {
  return 'world:' + info;
}
