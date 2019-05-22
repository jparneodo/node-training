'use strict';

function hello(info) {
  return 'hello:' + info;
}

function world(info = '') {
  return 'world:' + info;
}

module.exports = {
  hello,
  world,
};
