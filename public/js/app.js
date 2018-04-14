var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');  
var socket = io();

console.log(name + ' wants to join ' + room);

jQuery('.room-title').text(room);

socket.on('connect', function() {
    console.log('Connected to Socket.io !');
    socket.emit('JoinRoom', {
        name: name,
        room: room
    });
});

    socket.on('message', function(message) {
    var momentTimestamp = moment.utc(message.momentTimestamp);
    var $message = jQuery('.messages');
    var $message = jQuery('<li class="list-group-item"></li>');

    console.log('New Message : ');
    console.log(message.text);


    $message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('h:mm a') + ' ' + '</strong></p>');
    $message.append('<p><strong>' + message.text + '</strong></p>')
    $message.append($message);
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