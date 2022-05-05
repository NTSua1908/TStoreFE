import React from "react";
import { Link } from "react-router-dom";
import "./addresscard.scss";

function AddressCard(props) {
  const item = props.item;
  return (
    <div className="addresscard">
      <div className="addresscard__icon">
        <ion-icon name="location-outline"></ion-icon>
      </div>
      <div className="addresscard__information">
        <p className="addresscard__information-location">{item.location}</p>

        <p className="addresscard__information-phone">
          Số điện thoại: {item.phone}
        </p>
        <p className="addresscard__information-description">
          {item.description}
        </p>
        <p className="addresscard__information-latlng">
          <span className="addresscard__information-lng">{`[${item.lat}, `}</span>
          <span className="addresscard__information-lat">{`${item.lng}]`}</span>
        </p>
      </div>
      <div className="addresscard__option" title="Tùy chọn">
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        <div className="addresscard__option-list">
          <Link to="edit" state={item}>
            Chỉnh sửa
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
