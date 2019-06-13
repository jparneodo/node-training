'use strict';

const EventEmitter = require('events');

class MyListener extends EventEmitter {
  constructor() {
    super();

    // Bind the connection event with the first listener function
    this.on('connection', this.onConnectionListenerOne);

    // Bind the connection event with the second listener function
    this.on('connections', this.onConnectionListenerTwo);
  }

  // listener #1
  onConnectionListenerOne() {
    console.log('onConnectionListenerOne started');
  }

  // listener #2
  onConnectionListenerTwo() {
    console.log('onConnectionListenerTwo started');
  }
}

const eventEmitter = new MyListener();

let eventListeners = eventEmitter.listenerCount('connection');
console.log(`${eventListeners} listener(s) listening to connection event`);

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', eventEmitter.onConnectionListenerOne);
console.log('onConnectionListenerOne will not listen now.');

// WARNING: connexion event is not declared but fired without listener
eventEmitter.emit('connexion');

eventListeners = eventEmitter.listenerCount('connection');
console.log(`${eventListeners} listener(s) listening to connection event`);
