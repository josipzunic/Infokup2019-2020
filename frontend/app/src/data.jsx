//const serialport = require('serialport');

/*const port = new serialport('COM3', {
    baudRate: 9600,
    parser: new serialport.parsers.Readline('\n'),
});
*/


function getMolecule() {
    return 'COOH'
}

/*
port.on('open', function () {
    port.on('data', function(data) {
        molecule = data.toString();
        port.close();
    });
});
*/
export default getMolecule;
