# Native Nodejs modules

## Timers

See https://nodejs.org/api/timers.html#timers_scheduling_timers

### setImmediate()

```javascript
// See https://nodejs.org/api/timers.html#timers_setimmediate_callback_args
let immediate = setImmediate(() => {
  // Code here is called in the next nodejs event loop
});
```

TRAINING Execute _app-09-timer-01-set-immediate.js_

### setTimeout()

```javascript
// See https://nodejs.org/api/timers.html#timers_setimmediate_callback_args
let timeout = setTimeout(() => {
  // Code here is called in the next nodejs event loop
}, 1000); // Milliseconds
```

TRAINING Execute _app-09-timer-02-set-timeout.js_

### setInterval()

```javascript
// See https://nodejs.org/api/timers.html#timers_setimmediate_callback_args
let interval = setInterval(() => {
  // Code here is called in the next nodejs event loop
}, 1000); // Milliseconds
```

TRAINING Execute _app-09-timer-03-set-interval.js_

### clearImmediate()

```javascript
clearImmediate(immediate);
```

TRAINING Execute _app-09-timer-04-clear-immediate.js_

### clearTimeout()

```javascript
clearTimeout(timeout);
```

TRAINING Execute _app-09-timer-05-clear-timeout.js_

### clearInterval()

```javascript
clearInterval(interval);
```

TRAINING Execute _app-09-timer-06-clear-interval.js_

## Events

See https://nodejs.org/api/events.html

### Using events with functions

TRAINING Execute _app-09-event-01-function.js_

### Using events with classes

```javascript
class MyEvent extends EventEmitter {}
```

TRAINING Execute _app-09-event-02-class.js_

### Aware on bugs

Events are based on strings and binding can be easily wrong on emit or on adding listener.

See https://github.com/millermedeiros/js-signals/wiki/Comparison-between-different-Observer-Pattern-implementations for other event pattern.

TRAINING Execute _app-09-event-03-class-bug.js_ and next, find and correct the 2 bugs

## File System


## child_process

https://jscomplete.com/learn/node-beyond-basics/child-processes
