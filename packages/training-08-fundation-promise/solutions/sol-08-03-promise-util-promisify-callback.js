'use strict';

// NodeJs callback to promise adaptator
const { promisify } = require('util');

const api = require('../api');

// Transform api callbacks to promises

const apiVerifyUser = promisify(api.verifyUser);

const apiGetRoles = promisify(api.getRoles);

const apiLogAccess = promisify(api.logAccess);

function login(username, password) {
  //
  return new Promise((resolve, reject) => {
    //
    // Hell linearization: api.verifyUser() => api.getRoles() => api.logAccess
    //
    let info, roles, logs;

    apiVerifyUser(username, password)
      // Handle api.verifyUser()
      .then(_info => {
        info = _info;
        return apiGetRoles(username);
      })
      // Handle api.getRoles()
      .then(_roles => {
        roles = _roles;
        return apiLogAccess(username);
      })
      // Handle api.logAccess
      .then(_logs => {
        logs = _logs;
        return;
      })
      // Promise is resolved
      .then(() => {
        resolve({ info, roles, logs });
      })
      // Promise is rejected
      .catch(error => {
        reject(error);
      });

    // End of Promise
  });
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
