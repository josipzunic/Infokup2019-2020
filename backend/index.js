const express = require('express');                                                     // Includes express libraries
const cors = require('cors');                                                           // Includes cors libraries
const PORT = 2000;                                                                      // Sets port on which the app will run on
const HOST = '0.0.0.0';                                                                 // Sets host
const app = express();                                                                  // Creates express aplication
const pubchem = require('./node_modules/pubchem-access').domain('compound');            // Includes PubChem-access libraries for communication with PubChem REST API
const serialport = require('serialport');
const port = new serialport('COM3', {
    baudRate: 9600,
    parser: new serialport.parsers.Readline('\n'),
});

app.use(cors());         //enables CORS thus allowing requests from aplications that run on diferent domain then the one this app runs on

/**
* Recieves a request for properties of a compound and sends them as response.
*
* Firstly the pubchems's method setSmiles() is called and as parameter moleculeFormula is forwarded.
* Second, getProperties() method is forwarded an array of molecula's properties (strings) that we want to get.
* After that the function that sends response to client is called 
*
* @param  {Object} req  HTTP request object that contains SMILES of a molecule which's properties will be sent.
* @param  {Object} res  Respons object with methods used to give send response to client or to terminate the request-response cycle.
* @return        Ends GET request.
*/

app.get('/getCompound', (req, res) => {

    /**
     * Saves the SMILES of a molecule sent by req parameter in its query property.
     * @type {String}
     */

    let moleculeFormula = '';

    port.on('open', function () {
        port.on('data', function(data) {
            moleculeFormula = data.toString();
            port.close();
        });
    });

    pubchem
        .setSmiles(moleculeFormula)
        .getProperties(['IUPACName', 'ExactMass', 'MolecularFormula', 'Charge', 'MonoisotopicMass', 'MolecularWeight'])
        .execute( (data, status) => {
            if (status === 1) {     // If status is 1 the function has been exicutet with no problem
                res.send(data);     // Data about molecule is sent to frontend ()
            } else {
                res.status(404).send();
            }
        });
    
    return;
});


function onServerListen() {
    console.log(`App listening on ${HOST}:${PORT}`)
}

/**
 * Returns an http.Server object
 * 
 * @param {Number} PORT The number of port on which the app will run on
 * @param {String} HOST The host on which the app will run on
 * @param {function} onServerListen Function that will be exicuted after the app runs
 */

app.listen(PORT, HOST, onServerListen);
