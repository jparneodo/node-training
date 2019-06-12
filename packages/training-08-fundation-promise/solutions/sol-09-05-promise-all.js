'use strict';

// NodeJs callback to promise adaptator
const { promisify } = require('util');

const api = require('../api');

// Transform api callbacks to promises

const apiVerifyUser = promisify(api.verifyUser);

const apiGetRoles = promisify(api.getRoles);

const apiLogAccess = promisify(api.logAccess);

async function login(username, password) {
  //
  // Hell linearization: api.verifyUser() => api.getRoles() and api.logAccess in parallel
  //

  const info = await apiVerifyUser(username, password);

  const [roles, logs] = await Promise.all([apiGetRoles(username), apiLogAccess(username)]);

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
