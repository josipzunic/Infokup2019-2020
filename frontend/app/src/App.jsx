import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navBar/navBar';
import Test2 from './pages/BasicCompoundMenu/BasicCompoundMenu';
import Test from './pages/PlugInCompound/PlugInCompound';


const App = () => (
    /*<Router>
        <Navbar />
        <Route exact path="basic_compound" component={BasicCompoundMenu} />
        <Route exact path="plug_in" component={PlugInCompound} />
    </Router>*/
    <div>
        <Router>
            <Navbar />
            <Route exact path="#basicmolecule" component={Test2} />
            <Route exact path="#pluginmolecule" component={Test} />
        </Router>
    </div>
);

export default App;