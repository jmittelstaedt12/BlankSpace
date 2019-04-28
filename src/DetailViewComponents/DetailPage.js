import React, {Component} from 'react';
import newyork from '../assets/newyork.png';
import losangeles from '../assets/losangeles.png';
import houston from '../assets/houston.png';


export default class DetailPage extends Component {

  render() {
    return(
      <div style={{backgroundColor: '#EFEFEF'}}>
        <div className="row">
          <div className="container">
          <div className="col l7">
            <div className="card">
              <p style={styles.title}>Space Details</p>
              <p>Import space</p>
              <p style={styles.subtitle}>Additional Features</p>
              <p style={styles.subtitle}>Interior design and Construction</p>
              <p style={styles.subtitle}> Furniture and Equipment</p>
              <p style={styles.subtitle}>Professional Staffing</p>
            </div>
          </div>
            <div className="col l5">
              <img src={newyork}/>
              <div className="card">um</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const styles = {
  title: {
    fontSize: '25px'
  },
  subtitle: {
    fontSize: '20px'
  },
  text: {
    fontSize: '17px'
  }
}
