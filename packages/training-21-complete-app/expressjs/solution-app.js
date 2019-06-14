// SOLUTION for passport in training-21-complete-app/expressjs/mywebapp/app.js file

var app = express();

let passport = require('passport');
let strategy = require('passport-http');

passport.use(
  new strategy.BasicStrategy(function(username, password, done) {
    if (username !== password) {
      return done(null, false);
    }
    return done(null, { username, password, roles: ['admin', 'dev'], age: 21 });
  })
);

const AccessControl = require('accesscontrol');

// This is actually how the grants are maintained internally.
let grantsObject = {
  admin: {
    car: {
      'create:any': ['*', '!views'],
      'read:any': ['*'],
      'update:any': ['*', '!views'],
      'delete:any': ['*'],
    },
  },
  dev: {
    user: {
      'create:own': ['*', '!rating', '!views'],
      'read:own': ['*'],
      'read:any': ['username', 'roles', 'age'],
      'update:own': ['*', '!rating', '!views'],
      'delete:own': ['*'],
    },
  },
};
const ac = new AccessControl(grantsObject);
ac.lock();

app.set('ac', ac);
