// import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";

const MapShowcase = () => {
  return (
    <div>
      {/* <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map> */}
      <img className='img-fluid' src={require("../../img/map.PNG").default} alt='' />
    </div>
  );
};

// export default GoogleApiWrapper({
//   // apiKey: YOUR_GOOGLE_API_KEY_GOES_HERE,
// })(MapShowcase);
export default MapShowcase;
