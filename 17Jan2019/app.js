var datetime = new Date();
console.log(datetime);
setInterval(function () {
    
    /*
    var dt = new Date(Date.now()).toLocaleString()
    console.log(dt.toLocaleString());
    */

   var datetime = new Date();
   console.log(datetime.toISOString());

}, 1000);