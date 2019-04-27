import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
class App extends React.Component {
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
      <div className="App">
        <div className="container">
          <NavBar/>
          <h2 style={{'font-weight': '500'}}>Tell us about your business.</h2>
          <form>
            <label className="inputLabel">
              Name of business
              <div className="row">
                <input type="text" name="name" className="col s6 offset-s3"/>
              </div>
            </label>
            <label className="inputLabel">
              What do you hope to find out  through your BlankSpace Experience?
              <div className="row">
                <textarea value={this.state.value} onChange={this.handleChange} className="col s6 offset-s3" style={{height: '200px'}}/>
              </div>
            </label>
            <input type="submit" value="Location Options" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
