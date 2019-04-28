import React, { Component } from 'react';
class Confirmation extends React.Component {
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
        <h2 style={{'fontWeight': 'bold'}}>Thank you!</h2>
        <p style={{'fontSize': '20px','fontStyle':'italic','color':'#747474'}}>A representative from BlankSpace will be in touch with you soon.</p>
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

export default Confirmation;
