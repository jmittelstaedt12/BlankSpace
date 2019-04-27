import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import LandingFront from './LandingFront';
import DetailSpace from './DetailSpace';


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={()=><LandingFront/>}/>
            <Route exact path="/detailed" component={DetailSpace}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}
