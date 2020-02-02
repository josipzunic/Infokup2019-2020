const serialport = require('serialport');

const port = new serialport('COM3', {
    baudRate: 9600,
    parser: new serialport.parsers.Readline('\n'),
});

port.on('open', function () {
    port.on('data', function(data) {
        console.log(data.toString());
        port.close();
    });
});