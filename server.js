//*****************************/
const net = require('net');
const port = 9000;

//-- Server Instance

let serverSocket = net.createServer((socket) => {
    socket.write('Testing Socket Server \n');

    //--Handling server received data
    socket.on('data', (data) => {
        if (Buffer.compare(Buffer.from('camilo\r\n'), data) === 0) {
            console.log(`server: Hola ${data}`);
        } else {
            console.log('No se quien eres');
        }
    });

    //--Handling server received data
    socket.on('error', (error) => {
        console.log(error);
    });
});

//*****************************/

serverSocket.listen(port);
