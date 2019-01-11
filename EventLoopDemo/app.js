var events = require('events');

var eventEmitter = new events.EventEmitter();
var eventName = 'data_received';
var eventName1 = 'connection';

// Event Handler
var connectionHandler = function connected(){
    console.log('Connection Successful');

    eventEmitter.emit(eventName);
}

eventEmitter.on(eventName1, connectionHandler);

eventEmitter.on(eventName, function(){
    console.log('data received succesfully.');
});

eventEmitter.emit(eventName1);

console.log("Program Executed Successfully.");
