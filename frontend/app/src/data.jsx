const serialport = require('serialport');
let SerialPort = serialport.SerialPort;

let port = new SerialPort('PORT', {
    baudrate: 9600,
    parser: serialport.parsers.readline('\n'),
});

port.on('open', function () {
    console.log('open');
    port.on('data', function(data) {
        console.log(data);
    });
});