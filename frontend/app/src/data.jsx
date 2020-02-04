const serialport = require('serialport');

const port = new serialport('COM3', {
    baudRate: 9600,
    parser: new serialport.parsers.Readline('\n'),
});

let molecule = '';

port.on('open', function () {
    port.on('data', function(data) {
        molecule = data.toString();
        port.close();
    });
});

export default molecule;
