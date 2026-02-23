const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// Create event listener
eventEmitter.on('greet', (name) => {
    console.log(`Hello ${name}, welcome to SE3040 Lab 03!`);
});

// Trigger event
eventEmitter.emit('greet', 'Archala');