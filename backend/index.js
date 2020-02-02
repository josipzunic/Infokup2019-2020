const express = require('express');
const app = express();
const port = 2000;
let pubchem = require('./node_modules/pubchem-access').domain('compound');
let sentSmile = '[H]-[H]';
let cors = require('cors');

app.use(cors);
 
app.get('/getCompound', (req, res) => {
    pubchem
    .setSmiles(sentSmile)
    .getProperties(['IUPACName', 'ExactMass', 'MolecularFormula'])
    .execute(function (data, status) {
        res.send(data);
});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
