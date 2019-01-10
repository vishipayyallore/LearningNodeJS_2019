var fileSystem = require("fs");

fileSystem.readFile('./FileDemo/input.txt', function(error, data){
    if(error){
        return console.error(error);
    }
    console.log("Asynchronous read: " + data.toString());
});