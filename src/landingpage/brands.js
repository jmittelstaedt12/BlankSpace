import React from 'react';
import fakebrands from '../assets/brandfake.png';

const Brands = () => {
  return (
  <div>
    <div style={styles.text} >Brands we've partnered with</div>
    <img className="responsive-img" src={fakebrands} style={styles.space}/>
  </div>
  )
}

const styles = {
  text: {
    color: 'grey',
    fontSize:'40px',
    textAlign:'center',
    paddingTop: '40px',
    paddingBottom: '40px'
  },
  space: {
    paddingLeft: '40px'
  }
}


export default Brands;
