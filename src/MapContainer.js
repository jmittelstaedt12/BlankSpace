import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={styles.MapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

const styles = {
  MapStyles: {
    width: '100%',
    height: '100%'
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBdDXI82ioADgsGwoG5FHUl9sWA3F_nGrw'
})(MapContainer);
