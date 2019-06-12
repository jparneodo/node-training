'use strict';

const api = require('./api');

//
// TRAINING Refactor the 3 api with util.promisify and login function with Promise
//

const apiVerifyUser = () => {};

const apiGetRoles = () => {};

const apiLogAccess = () => {};

function login(username, password) {
  // TODO
}

login('john', 'john')
  .then(user => {
    console.log('Login john/john then:', user);
  })
  .catch(error => {
    console.log('Login john/john catch:', error);
  });

login('john', 'bug')
  .then(user => {
    console.log('Login john/bug then:', user);
  })
  .catch(error => {
    console.log('Login john/bug catch:', error);
  });

login('john', '')
  .then(user => {
    console.log('Login john/<empty> then:', user);
  })
  .catch(error => {
    console.log('Login john/john catch:', error);
  });

login('jane', 'jane')
  .then(user => {
    console.log('Login jane/jane then:', user);
  })
  .catch(error => {
    console.log('Login jane/jane catch:', error);
  });

login('remi', 'remi')
  .then(user => {
    console.log('Login remi/remi then:', user);
  })
  .catch(error => {
    console.log('Login remi/remi catch:', error);
  });
