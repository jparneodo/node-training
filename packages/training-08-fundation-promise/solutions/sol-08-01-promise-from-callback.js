'use strict';

const api = require('../api');

function login(username, password) {
  //
  return new Promise((resolve, reject) => {
    //
    // Hell linearization: api.verifyUser() => api.getRoles() => api.logAccess
    //
    let info, roles, logs;

    api.verifyUser(username, password, onVerifyUser);

    // Handle api.verifyUser()
    function onVerifyUser(error, _info) {
      if (error) {
        reject(error);
      } else {
        info = _info;
        api.getRoles(username, onGetRoles);
      }
    }

    // Handle api.getRoles()
    function onGetRoles(error, _roles) {
      if (error) {
        reject(error);
      } else {
        roles = _roles;
        api.logAccess(username, onLogAccess);
      }
    }

    // Handle api.logAccess
    function onLogAccess(error, _logs) {
      if (error) {
        reject(error);
      } else {
        logs = _logs;
        resolve({ info, roles, logs });
      }
    }

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
