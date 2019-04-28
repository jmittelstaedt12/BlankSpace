import React, { Component } from 'react';
import NavBar from './components/NavBar';
import LocationCard from './components/LocationCard';
import GoogleApiWrapper from './MapContainer';

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const locations = this.props.location.state.locations;
    const locationCards = locations.map((location) =>
      <div className="row">
        <LocationCard location={location}/>
      </div>
    );
    return (
      <div style={styles.Detail}>
        <NavBar/>
        <div className="row">
          <div className="col s6" style={styles.Main}>
            <div className="container">
              {locationCards}
            </div>
          </div>
          <div className="col s6">
            <GoogleApiWrapper className="col s6" locations={locations}/>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  Detail: {
    textAlign: 'center'
  },
  Main: {
    backgroundColor: 'lightGray',
    padding: 0,
    marginRight: -11,
  },
  mapStyles: {
    width: '100%',
    height: '100%'
  }
}

export default Detail;
