var events = require('events');

var eventEmitter = new events.EventEmitter();
var eventName = 'data_received';
var eventName1 = 'connection';
var inputData = { Name: 'Shiva', Age: 25, Salary: 21345 };

// Event Handler
var connectionHandler = function connected() {
    console.log('Connection Successful');

    eventEmitter.emit(eventName, inputData);
}

eventEmitter.on(eventName1, connectionHandler);

eventEmitter.on(eventName, function (input) {
    console.log('----- data received succesfully -----');
    console.log(`Person Details: ${input.Name} ${input.Age} ${input.Salary}`);
});

eventEmitter.emit(eventName1);

console.log("Program Executed Successfully.");
