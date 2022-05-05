// import React, { useState } from "react";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";

// const REACT_APP_MAPBOX_TOKEN =
//   "pk.eyJ1IjoibnRzdWEiLCJhIjoiY2wyMTgyajN3MTN1ZTNkbXF5enlpa3NsYyJ9.PI-7oE5YoI9toiNyjCRKeg";

// function Map(props) {
//   const [viewport, setViewport] = useState({
//     latitude: 45.4211,
//     longitude: -75.6903,
//     width: "100vw",
//     height: "100vh",
//     zoom: 10,
//   });

//   return (
//     <div>
//       sadfsdaf
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken="pk.eyJ1IjoibnRzdWEiLCJhIjoiY2wyMTgyajN3MTN1ZTNkbXF5enlpa3NsYyJ9.PI-7oE5YoI9toiNyjCRKeg"
//         // mapStyle="mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4"
//         mapStyle="mapbox://styles/mapbox/streets-v11"
//         onViewportChange={(viewport) => {
//           setViewport(viewport);
//         }}
//       >
//         Hey map
//       </ReactMapGL>
//       safsaf
//     </div>
//   );
// }

// export default Map;

import React, { useState, useEffect, useLayoutEffect } from "react";
import { GoogleMap, Marker } from "react-google-maps";

function Map(props) {
  const [position, setPosition] = useState({ lat: props.lat, lng: props.lng });

  useEffect(() => {
    !props.lat &&
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        getLocationInformation(
          position.coords.latitude,
          position.coords.longitude
        );
        // console.log("latitide = ", position.coords.latitude);
        // console.log("longitude = ", position.coords.longitude);
        props.setLat(position.coords.latitude);
        props.setLng(position.coords.longitude);
        console.log("hehe");
      });
    // console.log("huhu, ", props.lat, props.lng); //setPosition({ lat: props.lat, lng: props.lng });

    // console.log(getCurrentPosition());
  }, []);

  const getLocationInformation = (lat, lng) => {
    let url =
      "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
      lat +
      "&longitude=" +
      lng +
      "&localityLanguage=vi";

    // console.log("lat lng", lat, lng);
    fetch(url)
      .then((res) => res.json())
      .then((out) => {
        var location = ""; //`${out.locality} ${out.city} ${out.principalSubdivision} ${out.countryName}`;
        out.localityInfo.administrative
          .slice(0)
          .reverse()
          .map((item) => (location += item.name + ", "));
        location = location.substring(0, location.length - 2);
        // console.log(out);
        props.setLatLng(`[${lat}, ${lng}]`);
        props.setLocation(location);
      });
    // .catch((err) => throw err);
  };

  return (
    <div>
      <GoogleMap
        onClick={(ev) => {
          console.log("latitide = ", ev.latLng.lat());
          console.log("longitude = ", ev.latLng.lng());
          props.setLng(ev.latLng.lng());
          props.setLat(ev.latLng.lat());
          props.setLocation("Đang tải...");
          getLocationInformation(ev.latLng.lat(), ev.latLng.lng());
          // setPosition({
          //   lat: ev.latLng.lat(),
          //   lng: ev.latLng.lng(),
          // });
        }}
        // defaultCenter={{ lat: props.lat, lng: props.lng }}
        defaultZoom={16}
        center={position}
      >
        <Marker
          position={{
            lat: props.lat,
            lng: props.lng,
          }}
        />
      </GoogleMap>
    </div>
  );
}

export default Map;
