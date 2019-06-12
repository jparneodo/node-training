'use strict';

const api = require('./api');

//
// TRAINING Refactor the 3 api and login function with Promise
//

const apiVerifyUser = (username, password) => {
  return new Promise(function(resolve, reject) {
    // TODO
  });
};

const apiGetRoles = username => {
  return new Promise(function(resolve, reject) {
    // TODO
  });
};

const apiLogAccess = username => {
  return new Promise(function(resolve, reject) {
    // TODO
  });
};

function login(username, password) {
  // TODO
  throw 'Copy/Paste from your app-08-01-promise-from-callback.js';
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
    console.log('Login john/<empty> catch:', error);
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
