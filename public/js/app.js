var socket = io();

socket.on('connection', function() {
    console.log('Connected to Socket.io !');
});

socket.on('message', function(message) {
    console.log('New Message : ');
    console.log(message.text);

})