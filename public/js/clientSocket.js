var connected = false;

var socket = io('http://localhost:4869');
socket.emit('setup', userLoggedIn);
socket.on('connected', () => {
    connected = true;
})

socket.on('message received', (message) => {
    messageReceived(message)
})