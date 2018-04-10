var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');  
var socket = io();

console.log(name + ' wants to join ' + room);
socket.on('connection', function() {
    console.log('Connected to Socket.io !');
});

    socket.on('message', function(message) {
    var momentTimestamp = moment.utc(message.momentTimestamp);
    var $message = jQuery('.messages');

    console.log('New Message : ');
    console.log(message.text);


    $message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('h:mm a') + ' ' + '</strong></p>');
    $message.append('<p><strong>' + message.text + '</strong></p>')
    
});

// //Handles submtting of new messages
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
     event.preventDefault();

     var $message =  $form.find('input[name=message]');
     socket.emit('message', {
         name: name,
         text : $message.val() 
     });

    $message.val('');
});