import React, { Component } from 'react';
import NavBar from './components/NavBar.js'
class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.contactInfo}>
        <NavBar/>
        <h2 style={{'fontWeight': 'bold'}}>Let's get in touch.</h2>
            <div className="row">
              <span className="col s1 offset-s3" style={styles.label}>Name</span>
              <input type="text" name="name" placeholder="Required Field" className="col s5" style={styles.inputField}/>
            </div>
            <div className="row">
              <span className="col s1 offset-s3" style={styles.label}>Title</span>
              <input type="text" name="name" placeholder="Required Field" className="col s5" style={styles.inputField}/>
            </div>
            <div className="row">
              <span className="col s1 offset-s3" style={styles.label}>Phone</span>
              <input type="text" name="name" placeholder="Required Field" className="col s5" style={styles.inputField}/>
            </div>
            <div className="row">
              <span className="col s1 offset-s3" style={styles.label}>Email</span>
              <input type="text" name="name" placeholder="Required Field" className="col s5" style={styles.inputField}/>
            </div>
          <input type="submit" value="Submit Application" style={styles.locationOptionsBtn} />
      </div>
    );
  }
}

const styles = {
  contactInfo: {
    textAlign: 'center'
  },

  label: {
    marginTop: '10px',
    fontSize: '20px',
  },

  inputField: {
    borderColor: '#0393DB',
    borderStyle: 'solid',
    borderRadius: 30,
    borderWidth: 1,
    paddingLeft: '10px',
  },
  businessInfo: {
    height: '200px',
    borderColor: '#0393DB',
    borderStyle: 'solid',
    borderRadius: 30,
    borderWidth: 1
  },
  locationOptionsBtn: {
    backgroundColor: '#0393DB',
    color: 'white',
    borderRadius: 30,
    fontSize: '20px',
    height: '40px',
    paddingLeft: '15px',
    paddingRight: '15px'
  }
}

export default ContactInfo;
