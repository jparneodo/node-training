'use strict';

// NodeJs callback to promise adaptator
const { promisify } = require('util');

const api = require('../api');

//
// TRAINING Refactor the 3 api with util.promisify and login function with async/await
//

// Transform api callbacks to promises

const apiVerifyUser = () => {};

const apiGetRoles = () => {};

const apiLogAccess = () => {};

async function login(username, password) {
  //
  // Hell linearization: api.verifyUser() => api.getRoles() => api.logAccess
  //

  // TODO using async/await keyworks

  return { info, roles, logs };
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
