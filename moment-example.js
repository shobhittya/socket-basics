var moment = require('moment');
var now = moment();

console.log(now.format());

console.log(now.format('MMM Do hh:mma'));
console.log(now.format('X'));  // seconds
console.log(now.format('x'));  //Milliseconds

var timestamp = 1523348540;
var tStamp = moment.utc(timestamp);

console.log(tStamp.local().format('h:mm a'));  //01:55 pm

// now.subtract(1,'year');

// console.log(now.format());