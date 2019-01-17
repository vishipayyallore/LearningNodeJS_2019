var dt = require("./DataTimeModule");

setInterval(function () {
    
   console.log(dt.dateTimeISO());

}, 1000);

/*
var datetime = new Date();
console.log(datetime);

    var dt = new Date(Date.now()).toLocaleString()
    console.log(dt.toLocaleString());

       var datetime = new Date();

*/