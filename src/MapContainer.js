import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
  render() {
    const locations = this.props.locations
    const markers = locations.map((location) =>
      <Marker
        name={location.latitude}
        position={{lat: parseFloat(location.latitude), lng: parseFloat(location.longitude)}}/>
    )
    console.log(locations[0].longitude)
    const x = locations[0].latitude
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{width: '50%', height: '100%', position: 'relative'}}
        initialCenter={{
         lat: locations[0].latitude,
         lng: locations[0].longitude,
       }}>
       {markers}
    </Map>
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
