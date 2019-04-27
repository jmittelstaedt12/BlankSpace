import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Application">
        <NavBar/>
        <h2 style={{'fontWeight': 'bold'}}>Tell us about your business.</h2>
        <form>
          <label className="inputLabel">
            Name of business
            <div className="section"/>
            <div className="row">
              <input type="text" name="name" className="col s6 offset-s3" style={styles.inputField}/>
            </div>
          </label>
          <label className="inputLabel">
            What do you hope to find out  through your BlankSpace Experience?
            <div className="section"/>
            <div className="row">
              <textarea value={this.state.value} onChange={this.handleChange} className="col s6 offset-s3" style={styles.businessInfo}/>
            </div>
          </label>
          <input type="submit" value="Location Options" style={styles.locationOptionsBtn} />
        </form>
      </div>
    );
  }
}

const styles = {
  inputField: {
    borderColor: '#0393DB',
    borderStyle: 'solid',
    borderRadius: 30,
    borderWidth: 1
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
    borderRadius: 30
  }
}

export default Application;
