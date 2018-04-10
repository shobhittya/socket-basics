var socket = io();

socket.on('connection', function() {
    console.log('Connected to Socket.io !');
});

    socket.on('message', function(message) {
        var momentTimestamp = moment.utc(message.momentTimestamp);
    console.log('New Message : ');
    console.log(message.text);

    jQuery('.messages').append('<p><strong>' + momentTimestamp.local().format('h:mm a') + ': </strong>'  + message.text + '</p>');

});

// //Handles submtting of new messages
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
     event.preventDefault();

     var $message =  $form.find('input[name=message]');
     socket.emit('message', {
         text : $message.val() 
     });

    $message.val('');
});