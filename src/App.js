import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import LandingFront from './LandingFront';
import Detail from './Detail';
import SiteInformation from './SiteInformation';
import Application from './Application';
import ContactInfo from './ContactInfo';
import Confirmation from './Confirmation';
import NavBar from './components/NavBar';
import DetailPage from './DetailViewComponents/DetailPage.js';
import Footer from './components/Footer';
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={()=><LandingFront/>}/>
            <Route exact path="/site_information" component={DetailPage}/>
            <Route exact path="/detailed" component={Detail}/>
            <Route exact path="/site_information" component={SiteInformation}/>
            <Route exact path="/booking" component={Application}/>
            <Route exact path="/contact_info" component={ContactInfo}/>
            <Route exact path="/confirmation" component={Confirmation}/>
          </Switch>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }

}
