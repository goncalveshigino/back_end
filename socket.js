const socketIO = require('socket.io');
const socket = {};

function connect(server) {
    socketIO(server);
}

module.exports = {
    connect,
    socket
}