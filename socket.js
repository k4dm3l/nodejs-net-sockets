const net = require('net');
const port = 9000;

//--Client Instance
let client = new net.Socket();
client.connect(port, '127.0.0.1', () => {
    console.log('Connected');
});

    //--Handling send data to the server - process.stdin used to write text and send it to the server
process.stdin.on('data', (data) => {
    client.write(data);
    //client.destroy();
});

client.on('data', (data) => {
    process.stdout.write(data);
});
    //--Handling error with the client connection
client.on('error', (err) => {
    console.log(err.message);
});

//*****************************/

//-- Server Instance

let serverSocket = net.createServer((socket) => {
    socket.write('Testing Socket Server \n');

    //--Handling server received data
    socket.on('data', (data) => {
        console.log(`server: ${data}`);
    });

    //--Handling server received data
    socket.on('error', (error) => {
        console.log(error);
    });
});

//*****************************/

serverSocket.listen(port);
