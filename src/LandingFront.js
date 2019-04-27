import React, {Component} from 'react';
import './App.css';
import ny from './assets/newyork.png';
import la from './assets/losangeles.png';
import tx from './assets/houston.png';

export default class LandingFront extends React.Component {
  render() {
    return(
      <div className="background-image">
        <div style={styles.link}>
          Taking your business from online to IRL
          <div className="section"></div>
          <div className="container" style={styles.text}>Want to explore what retail has to offer? We'll just ask you a few questions on what kind of business you have and the retail experience you want.  Afterwards, we'll get back to you quicker than overnight shipping.</div>
          <div className="section"></div>
          <div className="row">
            <div className="col s4 m4 l4"><img className="responsive-img" src={ny}/></div>
            <div className="col s4 m4 l4"><img className="responsive-img" src={la}/></div>
            <div className="col s4 m4 l4"><img className="responsive-img" src={tx}/></div>
          </div>
        </div>


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
    paddingBottom: '450px',
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
