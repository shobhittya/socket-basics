var socket = io();

socket.on('connection', function() {
    console.log('Connected to Socket.io !');
});

    socket.on('message', function(message) {
    console.log('New Message : ');
    console.log(message.text);

   // jQuery('.messages').append('<p>'  + message.text + '</p>');

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