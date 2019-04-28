import React, { Component } from 'react';
import NavBar from './components/NavBar.js'
import {Link} from 'react-router-dom';
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div style={styles.Application}>
        <NavBar/>
        <h2 style={{'fontWeight': 'bold'}}>Tell us about your business.</h2>
        <form>
          <label style={styles.inputLabel}>
            Name of business
            <div className="section"/>
            <div className="row">
              <input type="text" name="name" placeholder="Required Field" className="col s6 offset-s3" style={styles.inputField}/>
            </div>
          </label>
          <label style={styles.inputLabel}>
            What do you hope to find out  through your BlankSpace Experience?
            <div className="section"/>
            <div className="row">
              <textarea value={this.state.value} onChange={this.handleChange} placeholder="Required Field" className="col s6 offset-s3" style={styles.businessInfo}/>
            </div>
          </label>
          <Link to={{
            pathname: '/contact_info'
          }}><input type="submit" value="Location Options" style={styles.locationOptionsBtn} /></Link>
        </form>
      </div>
    );
  }
}

const styles = {
  Application: {
    textAlign: 'center'
  },

  inputLabel: {
    color: 'black',
    fontWeight: '500',
    fontSize: '20px',
  },

  inputField: {
    borderColor: '#0393DB',
    borderStyle: 'solid',
    borderRadius: 30,
    borderWidth: 1,
    paddingLeft: '10px'
  },

  businessInfo: {
    height: '170px',
    borderColor: '#0393DB',
    borderStyle: 'solid',
    borderRadius: 30,
    borderWidth: 1,
    padding: '10px',
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

export default Application;
