// SOLUTION for passport in training-21-complete-app/expressjs/mywebapp/routes/users.js file

/* GET users listing. */
router.get('/', passport.authenticate('basic', { session: false }), function(req, res, next) {
  let ac = req.app.get('ac');
  let permission = ac.can(req.user.roles).readAny('user');
  if (!permission.granted) {
    // resource is forbidden for this user/role
    res.status(403).end();
  }
  res.json(permission.filter(req.user));
});
