import React, { Component } from 'react';
import './assets/style/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Marvel from  './Pages/Marvel'
import Home from './Pages/Home'
import Dc from './Pages/Dc'


function App() {
    return (
        <div className = "App">
            <Router>
                <div>
                    <Route exact  path="/" component={Home} />
                    <Route  path="/marvel" component={Marvel} />
                    <Route  path="/dc" component={Dc} />
                </div>
            </Router>
        </div>
    );
}

export default App;