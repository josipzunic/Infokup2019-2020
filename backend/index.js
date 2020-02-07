const express = require('express');
const cors = require('cors');
const PORT = 2000;
const HOST = "0.0.0.0";
const app = express();
const pubchem = require('./node_modules/pubchem-access').domain('compound');

app.use(cors());

app.get('/getCompound/', (req, res) => {
    const moleculeFormule = req.query.molecule;

    pubchem
        .setSmiles(moleculeFormule)
        .getProperties(['IUPACName', 'ExactMass', 'MolecularFormula', 'Charge', 'MonoisotopicMass', 'MolecularWeight'])
        .execute( (data, status) => {
            if (status === 1) {
                res.send(data);
            } else {
                res.status(404).send();
            }
        });
    
    return;
});


function onServerListen() {
    console.log(`App listening on ${HOST}:${PORT}`)
}

app.listen(PORT, HOST, onServerListen);
