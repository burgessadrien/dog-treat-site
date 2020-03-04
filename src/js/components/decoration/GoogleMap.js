import React from 'react';
import { 
    Map, 
    GoogleApiWrapper,
    Marker 
} from 'google-maps-react';

const mapStyles = {
    position: 'relative',
  };

export class GoogleMap extends React.Component {

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
          lat: 47.58,
          lng: -52.73
        }}
      >
          <Marker title="Dog Treats" position={{lat: 47.593972, lng: -52.730087}}/>  
      </Map>
    );
  }
}

  export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_MAP_API_KEY
  })(GoogleMap);
