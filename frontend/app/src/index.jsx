import React from 'react';
import ReactDOM from 'react-dom';
import Home from './App';
import './index.module.css';
import Plug from './pages/PlugInCompound/PlugInCompound';
import { HashRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
            <main>
                <Route exact path="/" component={Home} />
                <Route path="/PlugInCompound" component={Plug} />
            </main>
        </div>
    </Router>,
    document.getElementById('root'));