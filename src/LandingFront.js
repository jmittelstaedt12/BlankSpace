import React, {Component} from 'react';
import './App.css';
import ny from './assets/newyork.png';
import la from './assets/losangeles.png';
import tx from './assets/houston.png';
import Brands from './landingpage/brands.js';
import Explain from './landingpage/explain.js';
import {Link} from 'react-router-dom';
export default class LandingFront extends React.Component {
  render() {
    console.log("bruh")
    console.log("loc: "+Locations.NY[0].address)
    return(
      <div>
      <div className="background-image">
        <div style={styles.link}>
          Taking your business from online to IRL
          <div className="section"></div>
          <div className="container" style={styles.text}>Want to explore what retail has to offer? We'll just ask you a few questions on what kind of business you have and the retail experience you want.  Afterwards, we'll get back to you quicker than overnight shipping.</div>
          <div className="section"></div>
          <div className="row">
            <Link to={{
              pathname: '/detailed',
              state: {
                locations: Locations.NY
              }
            }}><div className="col s4 m4 l4"><img className="responsive-img" src={ny}/></div></Link>
            <Link to={{
              pathname: '/detailed',
              state: {
                locations: Locations.LA
              }
            }}><div className="col s4 m4 l4"><img className="responsive-img" src={la}/></div></Link>
            <Link to={{
              pathname: '/detailed',
              state: {
                locations: Locations.Houston
              }
            }}><div className="col s4 m4 l4"><img className="responsive-img" src={tx}/></div></Link>
          </div>
        </div>

        </div>
        <Brands/>
        <Explain/>
    </div>
    )
  }
}

const styles = {
  link: {
    color: 'white',
    padding: '17px 0',
    fontSize:'40px',
    textAlign:'center',
    fontFamily: 'Lato',
    fontWeight: 'Normal',
    paddingBottom: '180px',
    paddingTop: '40px'
  },

  text: {
    fontFamily: 'Lato',
    fontSize:'20px',
    color: 'white',
    padding: '17px 0',
    fontWeight: 'Normal'
  }
}

const Locations = {
  Houston: [
      {
        address:'1416 Travis St',
        city:'East Downtown',
        size:'400 sq ft.',
        price:'$200 per day',
        latitude: 29.754763,
        longitude: -95.368629,
        images:'au3'
      },
      {
        address:'1401 Caroline St',
        city:'Downtown Houston',
        size:'1,200 sq ft.',
        price:'$400 per day',
        latitude: 29.752284,
        longitude: -95.364810,
        images:'au2'
      },
      {
        address:'1201 Fannin St',
        city:'Downtown Houston',
        size:'900 sq ft.',
        price:'$500 per day',
        latitude: 29.754786,
        longitude: -95.364908,
        images:'au1'
      },
    ],
  LA: [
    {
      address:'1416 Travis St',
      city:'East Downtown',
      size:'400 sq ft.',
      price:'$200 per day',
      latitude: 34.049880,
      longitude: -118.253729,
      images:'la3'
    },
    {
      address:'1401 Caroline St',
      city:'Downtown Houston',
      size:'1,200 sq ft.',
      price:'$400 per day',
      latitude: 34.049844,
      longitude: -118.249867,
      images:'la2'
    },
    {
      address:'1201 Fannin St',
      city:'Downtown Houston',
      size:'900 sq ft.',
      price:'$500 per day',
      latitude: 34.042864,
      longitude: -118.254721,
      images:'la1'
    },
  ],
  NY: [
    {
      address:'1416 Travis St',
      city:'East Downtown',
      size:'400 sq ft.',
      price:'$200 per day',
      latitude: 40.760534,
      longitude: -73.989507,
      images:'ny3'
    },
    {
      address:'1401 Caroline St',
      city:'Downtown Houston',
      size:'1,200 sq ft.',
      price:'$400 per day',
      latitude: 40.757640,
      longitude: -73.982856,
      images:'ny2'
    },
    {
      address:'1201 Fannin St',
      city:'Downtown Houston',
      size:'900 sq ft.',
      price:'$500 per day',
      latitude: 40.758663,
      longitude:-73.979479,
      images:'ny1'
    },
  ]
}
