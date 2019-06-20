# Callbacks

Why understanding the callback feature?

- Node API is callback oriented, like [setTimeout](https://nodejs.org/dist/latest-v12.x/docs/api/timers.html#timers_settimeout_callback_delay_args).
- A lot of existing modules are built with callbacks, including the excellent [async module](https://www.npmjs.com/package/async).

```javascript
// Callback usage
function mycallback(error, data) {
  if (error) {
    // Error Use Case
    // ...
    return;
  }
  // Normal Use Case
  // ...
}
```

Example to illustrate the problem to solve, a user login session:

- Verify the username and password of a user.
- Get application roles for the user.
- Log application access time for the user.

TRAINING Look at the solution with only anonymous functions to see the pyramid shape using `exo-07-01-callback-hell`

TRAINING Refactor code putting a name on anonymous functions, and remove the pyramid shape using `exo-07-01-callback-hell/app-08-01-callback-hell-refactor.js`

TRAINING Compare your solution with `exo-07-02-callback-refactored`
