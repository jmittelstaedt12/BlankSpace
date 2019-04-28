import React, {Component} from 'react';
import newyork from '../assets/newyork.png';
import losangeles from '../assets/losangeles.png';
import houston from '../assets/houston.png';
import {Link} from 'react-router-dom';


export default class DetailPage extends Component {

  render() {
    const loc = this.props.location.state.location
    console.log(this.props.location.state.location)
    return(
      <div style={{backgroundColor: '#EFEFEF'}}>
        <div className="row">
          <div className="container">
          <div className="col l7">
            <div className="card">
              <div className="container" style={{paddingTop:'10px'}}>
                <div className="row">
                  <p className="col s10 m8 l8"style={styles.title}>Space Details</p>
                  <p className="col s10 m4 l4" style={styles.text}>{loc.address}</p>
                  <p className="col s10 m4 l4" style={styles.text}>{loc.size}</p>
                  <p className="col s10 m4 l4" style={styles.text}>{loc.price}</p>
                  <p className="col s10 m8 l8"style={styles.subtitle}>Additional Features</p>
                  <p className="col s10 m8 l8"style={styles.subtitle}>Interior design and Construction</p>
                  <p className="col s10 m8 l8" style={styles.text}>Includes painting, backdrop installaton, lighting fixtures, custom made figures>Light</p>
                  <p className="col s10 m8 l8"style={styles.subtitle}> Furniture and Equipment</p>
                  <p className="col s10 m8 l8" style={styles.text}>Includes painting, backdrop installaton, lighting fixtures, custom made figures>Light</p>
                  <p className="col s10 m8 l8"style={styles.subtitle}>Professional Staffing</p>
                  <p className="col s10 m8 l8" style={styles.text}>Includes painting, backdrop installaton, lighting fixtures, custom made figures>Light</p>
                </div>
             </div>
            </div>
          </div>
            <div className="col l5">
              <img className="responsive-img" src={require('../assets/storefronts/'+loc.images+'.png')}/>
              <div className="card">
                <div className="container">
                  <div style={styles.subtitle}>Space Features</div>
                  <div style={styles.text}>-Hardwood Flooring</div>
                  <div style={styles.text}>-Natural Sunlight</div>

                </div>
                <div className="section"/>

              </div>
              <div className="row" style={{'marginBottom': '0px'}}>
                <Link to={{
                  pathname: '/booking',
                  state: {
                    location: this.props.location
                  }
                }}><input className = "col s10" type="submit" value="Book" style={styles.bookBtn} /></Link>
              </div>

              <div className="section"/>
              <div className="section" style={{paddingBottom: '100px'}}/>
            </div>

          </div>

        </div>
      </div>
    )
  }
}


const styles = {
  title: {
    fontSize: '25px',
    margin: '0px'
  },
  subtitle: {
    fontSize: '20px'
  },
  text: {
    fontSize: '15px'
  },
  noPadding: {
    padding: '0px'
  },

  bookBtn: {
    backgroundColor: '#0393DB',
    color: 'white',
    borderRadius: 10,
    height: 30,
    fontSize: '12px'
  }
}
