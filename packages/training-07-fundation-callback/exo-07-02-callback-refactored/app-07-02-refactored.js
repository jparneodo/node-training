'use strict';

const api = require('./api');

function login(username, password, callback) {
  //
  // Hell linearization: api.verifyUser() => api.getRoles() => api.logAccess
  //
  let info, roles, logs;

  api.verifyUser(username, password, onVerifyUser);

  // Handle api.verifyUser()
  function onVerifyUser(error, _info) {
    if (error) {
      callback(error);
    } else {
      info = _info;
      api.getRoles(username, onGetRoles);
    }
  }

  // Handle api.getRoles()
  function onGetRoles(error, _roles) {
    if (error) {
      callback(error);
    } else {
      roles = _roles;
      api.logAccess(username, onLogAccess);
    }
  }

  // Handle api.logAccess
  function onLogAccess(error, _logs) {
    if (error) {
      callback(error);
    } else {
      logs = _logs;
      callback(null, { info, roles, logs });
    }
  }
}

login('john', 'john', (error, user) => {
  console.log('Login:', { error: error, user });
});

login('john', 'bug', (error, user) => {
  console.log('Login:', { error: error, user });
});

login('john', '', (error, user) => {
  console.log('Login:', { error: error, user });
});

login('jane', 'jane', (error, user) => {
  console.log('Login:', { error: error, user });
});

login('remi', 'remi', (error, user) => {
  console.log('Login:', { error: error, user });
});
