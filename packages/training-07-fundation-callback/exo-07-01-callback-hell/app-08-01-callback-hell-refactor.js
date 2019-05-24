'use strict';

const api = require('./api');

/*
 *
 * TRAINING MODIFY THE login() FUNCTION TO REMOVE HELL
 *
 */

/*
// OLD Callback hell
function login(username, password, callback) {
  api.verifyUser(username, password, (error, info) => {
    if (error) {
      callback(error);
    } else {
      api.getRoles(username, (error, roles) => {
        if (error) {
          callback(error);
        } else {
          api.logAccess(username, (error, logs) => {
            if (error) {
              callback(error);
            } else {
              callback(null, { info, roles, logs });
            }
          });
        }
      });
    }
  });
}
*/

// New login() refactored
function login(username, password, callback) {
  // TRAINING refactor here the login function
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
