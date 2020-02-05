/* import '../../kekule';

function createWater() {
    let molecule = new Kekule.Molecule();

    let oxygen = new Kekule.Atom().setSymbol('O').setCoord2D({'x': 0, 'y': 0});
    let hydrogen = new Kekule.Atom().setSymbol('H').setCoord2D({'x': Math.cos(26*Math.PI/45+ 6*Math.PI/5), 'y': Math.sin(26*Math.PI/45+ 6*Math.PI/5)});
    let hydrogen2 = new Kekule.Atom().setSymbol('H').setCoord2D({'x': Math.cos(6*Math.PI/5), 'y': Math.sin(6*Math.PI/5)});

    molecule.appendNode(oxygen);
    molecule.appendNode(hydrogen);
    molecule.appendNode(hydrogen2);

    let bond1 = new Kekule.Bond().setBondOrder(1).setConnectedObjs([oxygen, hydrogen]);
    let bond2 = new Kekule.Bond().setBondOrder(1).setConnectedObjs([oxygen, hydrogen2]);

    molecule.appendConnector(bond1);
    molecule.appendConnector(bond2);

    return molecule;
}

const water = createWater();

export default water;
*/