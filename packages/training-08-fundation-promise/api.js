'use strict';

const fs = require('fs');

// Database: some defined users
const users = {
  john: { firstname: 'John', lastname: 'Doe', roles: ['client'], password: 'john' },
  jane: { firstname: 'Jane', lastname: 'Doe', roles: ['admin', 'dev'], password: 'jane' },
  remi: { firstname: 'Rémi', lastname: 'French', roles: [], password: 'remi' },
};

function verifyUser(username, password, callback) {
  // DRY access to user
  const user = users[username];

  // Surface control on username
  if (typeof username !== 'string' || username === '') {
    callback(new LoginVerifyUserError('username expected'));

    // Expressive return (my prefered way), see https://eslint.org/docs/rules/callback-return
    return;
  }

  // Surface control on password
  if (typeof password !== 'string' || password === '') {
    // Less expressive return, the callback dictat on returned value
    // if you forgot the return keyword the function continues execution
    return callback(new LoginVerifyUserError('password expected'));
  }

  // Database consistency
  if (!user) {
    callback(new LoginVerifyUserError('username not found'));

    // Stop execution
    return;
  }

  // User consistency
  if (password !== user.password) {
    callback(new LoginVerifyUserError('password is not correct'));

    // Stop execution
    return;
  }

  // OK
  callback(null, users[username]); // Warning: password leaked here :-)
}

function getRoles(username, callback) {
  // DRY access to user
  const user = users[username];

  if (!user) {
    callback(new LoginGetRolesError('username not found'));

    // Stop execution
    return;
  }

  // DRY access to user roles
  const roles = user.roles;

  if (roles.length === 0) {
    callback(new LoginGetRolesError('username has no role'));

    // Stop execution
    return;
  }

  callback(null, roles);
}

function logAccess(username, callback) {
  // Some data to write in logs
  const data = {
    username,
    at: new Date().toISOString(),
  };

  // Try to fail sometimes
  const subdir = Math.random() * 10 > 8 ? 'logs-buggy' : 'logs';

  // Build the file name to save logs
  const filename = `${process.env.PWD}/${subdir}/${data.at}.${username}.json`;

  // Write to disk, async mode
  // See node api: https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
  fs.writeFile(filename, JSON.stringify(data, null, 2), 'utf8', (error, data) => {
    if (error) {
      callback(error);
    } else {
      callback(null, filename);
    }
  });

  // Here the write to the file is requested but not started
  // See the loop event to understand why
}

// Strong typed errors
class LoginVerifyUserError extends Error {}
class LoginGetRolesError extends Error {}

module.exports = {
  verifyUser,
  getRoles,
  logAccess,
};
