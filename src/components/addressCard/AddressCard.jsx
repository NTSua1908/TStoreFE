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
        <p className="addresscard__information-name">Tên: {item.name}</p>

        <p className="addresscard__information-location">
          Địa chỉ: {item.location}
        </p>

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
        {props.flag && (
          <Link to={"/user/payment"} state={item}>
            <button
              className="addresscard__information-button"
              onClick={() => {}}
            >
              Giao đến địa chỉ này
            </button>
          </Link>
        )}
      </div>

      <div className="addresscard__option">
        <Link to="edit" state={item} title="Sửa">
          <ion-icon name="create" title="chỉnh sửa"></ion-icon>
        </Link>
        <div onClick={props.onDelete} title="xoá">
          <ion-icon name="trash-sharp"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
