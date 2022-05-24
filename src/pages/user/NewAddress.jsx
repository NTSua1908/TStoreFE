import React, { useEffect, useLayoutEffect, useState } from "react";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";

import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import Map from "../../components/map/Map";
import "./newaddress.scss";

const MapWrapped = withScriptjs(withGoogleMap(Map));
const APP_GOOGLE_KEY = "AIzaSyD1zXDp1vMK-2LjHvFCU0jNi-n-fpWQAk8";

function NewAddress(props) {
  const { state } = useLocation();

  const [lat, setLat] = useState(state.lat);
  const [lng, setLng] = useState(state.lng);
  const [location, setLocation] = useState(state.location);
  const [description, setDescription] = useState(state.description);
  const [latlng, setLatLng] = useState("");
  const [name,setName]=useState(state.name);
  const [phone, setPhone] = useState(state.phone);

  useLayoutEffect(() => {
    console.log("l", lat);
  }, []);
  useEffect(() => {
    console.log("e", lat);
  }, []);

  const navigation = useNavigate();

  return (
    <div className="newAdress">
      <div className="newAdress-wrapper">
        <div className="newAdress-title">
          <span>{name!=null ? "Chỉnh sửa" : "Thêm"}</span>
          <div
            className="newAdress-title-close"
            title="Đóng"
            onClick={() => navigation("/user/address")}
          >
            <ion-icon name="close-outline"></ion-icon>
          </div>
        </div>
        <div className="newAdress-container">
          <div className="newAdress-info">
            <h3 className="newAdress-info-title">Địa điểm được chọn</h3>
            <div className="newAdress-info-location">
              <ion-icon name="location-outline"></ion-icon>
              <p>{location}</p>
              <span>{latlng}</span>
            </div>
            <Input
              placeholder="Họ và tên"
              value={name}
              onChange={setName}
              inWhite
              small
            />
            <Input
              placeholder="Mô tả địa điểm"
              value={description}
              onChange={setDescription}
              inWhite
              small
            />
             <Input
              placeholder="Số điện thoại"
              value={phone}
              onChange={setPhone}
              inWhite
              small
            />
            <button className="newAdress-info-confirm">Xác nhận</button>
            <button
              className="newAdress-info-cancel"
              onClick={() => navigation("/user/address")}
            >
              Hủy
            </button>
          </div>
          <div className="newAdress-map">
            <MapWrapped
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${APP_GOOGLE_KEY}`}
              // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=&callback=myMap`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              lat={lat}
              setLat={setLat}
              lng={lng}
              setLng={setLng}
              setLocation={setLocation}
              setLatLng={setLatLng}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAddress;
