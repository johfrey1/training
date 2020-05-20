import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


import Marvel from '../pages/Marvel';
import Dc from '../pages/Dc';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Layout from '../components/Layout';


function App() {
  return (
    <div className="container">
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/marvel" component={Marvel} />
              <Route exact path="/dc" component={Dc} />
              <Route exact path="/marvel/details/:name" component={Details} />
              <Route exact path="/dc/details/:name" component={Details} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
