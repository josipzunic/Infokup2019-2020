import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/Home/homePage';
import './index.module.css';
import Plug from './pages/PlugInCompound/PlugInCompound';
import { HashRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
            <main>
                <Route exact path="/" component={HomePage} />
                <Route path="/PlugInCompound" component={Plug} />
            </main>
        </div>
    </Router>,
    document.getElementById('root'));