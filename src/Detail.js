import React, { Component } from 'react';
import NavBar from './components/NavBar.js'
import GoogleApiWrapper from './MapContainer.js';

class Detail extends React.Component {
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
      <div style={styles.Application}>
        <NavBar/>
        <GoogleApiWrapper/>
      </div>
    );
  }
}

const styles = {
  Detail: {
    textAlign: 'center'
  },
  mapStyles: {
    width: '100%',
    height: '100%'
  }
}

export default Detail;
