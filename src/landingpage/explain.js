import React from 'react';
import fakebrands from '../assets/brandfake.png';

const Explain = () => {
  return (
  <div style={{backgroundColor: '#efefef'}}>
    <div className="section"/>
    <div className="container">
      <span style={styles.blankspace}>BlankSpace </span>
      <span style={styles.text}>is a partnership with direct-to-consumer brands to showcase their products and services beyond the screen. Offering space in prime  shopping areas across the country, we'll guide you to displaying your products in a way that makes sense.</span>
      <div className="section"/>
    </div>
    <div className="section"/>
  </div>
  )
}

const styles = {
  blankspace: {
    color: '#0393DB',
    fontSize:'25px',
    textAlign:'center',
    paddingTop: '40px',
  },
  text: {
    fontSize:'25px',
    textAlign:'center',
  }
}


export default Explain;
