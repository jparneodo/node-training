# Callbacks

Why understanding the callback feature?

- Node API is callback oriented, like [setTimeout](https://nodejs.org/dist/latest-v12.x/docs/api/timers.html#timers_settimeout_callback_delay_args).
- A lot of existing modules are built with callbacks, including the excellent [async module](https://www.npmjs.com/package/async).

Example to illustrate the problem to solve, a user login session:

- Verify the username and password of a user.
- Get application roles for the user.
- Log application access time for the user.

TRAINING Write the solution with only anonymous functions to see the pyramid shape using `exo-07-01-callback-hell`
