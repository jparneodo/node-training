'use strict';

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// listener #1
function onConnectionListenerOne() {
  console.log('onConnectionListenerOne started');
}

// listener #2
function onConnectionListenerTwo() {
  console.log('onConnectionListenerTwo started');
}

// Bind the connection event with the listener1 function
eventEmitter.on('connection', onConnectionListenerOne);

// Bind the connection event with the listener2 function
eventEmitter.on('connection', onConnectionListenerTwo);

let eventListeners = eventEmitter.listenerCount('connection');
console.log(`${eventListeners} listener(s) listening to connection event`);

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', onConnectionListenerOne);
console.log('onConnectionListenerOne will not listen now.');

// Fire the connection event
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(`${eventListeners} listener(s) listening to connection event`);
