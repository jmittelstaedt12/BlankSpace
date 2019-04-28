import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import LandingFront from './LandingFront';
import DetailSpace from './DetailSpace';
import DetailPage from './DetailViewComponents/DetailPage';
import NavBar from './components/NavBar.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={()=><LandingFront/>}/>
            <Route exact path="/detailed" component={DetailSpace}/>
            <Route exact path="/detailedview" component={DetailPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}
