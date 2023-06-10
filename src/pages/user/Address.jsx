import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Geocode from "react-geocode";
import Map from "../../components/map/Map";
import Header from "../../components/header/Header";
import "./address.scss";

import AddressCard from "../../components/addressCard/AddressCard";

// const APP_GOOGLE_KEY = "AIzaSyBXWDZ8_7sfcUUaNTLMSQ-wZe7xBRcATs4";
// const APP_GOOGLE_KEY = "AIzaSyDWTx7bREpM5B6JKdbzOvMW-RRlhkukmVE";
// const APP_GOOGLE_KEY = "	AIzaSyCJqpC7oo-YYJJ1pRVZJgf84qExlHZCWSc";
// const APP_GOOGLE_KEY = "AIzaSyA66KwUrjxcFG5u0exynlJ45CrbrNe3hEc";
// const APP_GOOGLE_KEY = "	AIzaSyDc7PnOq3Hxzq6dxeUVaY8WGLHIePl0swY";

const addressItems = [
  {
    name: "Quỳnh Móm",
    location: "Ninh Kiều",
    lat: 10.879610194004936,
    lng: 106.77905376740718,
    description: "Đây là mô tả cho địa điểm này",
    phone: "0357264861",
  },
  {
    name: "Long Thành",
    location:
      "Linh Xuân, Thủ Đức, Thành phố Hồ Chí Minh, Đông Nam Bộ, Việt Nam",
    lat: 10.879610194004936,
    lng: 106.77905376740718,
    description: "Đây là mô tả cho địa điểm này",
    phone: "0357264861",
  },
  {
    name: "Thiện Sua",
    location: "Châu Thành, Bến Tre, Việt Nam",
    lat: 10.261107091263966,
    lng: 106.40867898486442,
    description: "Đây là mô tả cho địa điểm này Đây là mô tả cho địa điểm này",
    phone: "0357264861",
  },
  {
    name: "Hiếu Nghĩa",
    location: "Tam Nông, Đồng Tháp, Việt Nam",
    lat: 10.747996934807828,
    lng: 105.47674886259097,
    description:
      "Đây là mô tả cho địa điểm này Đây là mô tả cho địa điểm này Đây là mô tả cho địa điểm này",
    phone: "0357264861",
  },
  {
    name: "Thanh vũ",
    location: "Hòn Đất, Kiên Giang, Việt Nam",
    lat: 10.332161030999368,
    lng: 104.76813069852847,
    description: "Đây là mô tả cho địa điểm này Đây là mô tả cho địa điểm này",
    phone: "0357264861",
  },
  {
    name: "Ngân Quỳnh",
    location: "An Phú, An Giang, Việt Nam",
    lat: 10.812751538522308,
    lng: 105.11420003446597,
    description: "Đây là mô tả cho địa điểm này",
    phone: "0357264861",
  },
  {
    name: "Huỳnh Nữ",
    location: "Krông Bông, Đắk Lắk, Tây Nguyên, Việt Nam",
    lat: 12.464417800635074,
    lng: 108.67377034696597,
    description: "",
    phone: "0357264861",
  },
  {
    name: "Khánh Quỳnh",
    location: "Nam Giang, Quảng Nam, Nam Trung Bộ Việt Nam, Việt Nam",
    lat: 15.739387033691115,
    lng: 107.87176839384097,
    description: "Đây là mô tả cho địa điểm này",
    phone: "0357264861",
  },
  {
    name: "Quỳnh Thư",
    location: "Kim Mã, Ba Đình, Hà Nội, Đồng bằng sông Hồng, Việt Nam",
    lat: 21.028729678657626,
    lng: 105.82379093186738,
    description: "Đây là mô tả cho địa điểm này",
    phone: "0357264861",
  },
  {
    name: "Diễm My",
    location: "Bắc Quang, Hà Giang, Vùng Đông Bắc, Việt Nam",
    lat: 22.467491887477646,
    lng: 104.85150089280488,
    description: "Đây là mô tả cho địa điểm này",
    phone: "0357264861",
  },
];

function Address(props) {
  const mapRef = useRef();
  const googleMapRef = useRef();

  const { state } = useLocation();

  // const handleEdit = (item) => {
  //   mapRef.current.classList.add("active");
  //   setLat(item.lat);
  //   setLng(item.lng);
  //   setLocation(item.location);
  //   setDescription(item.description);
  //   // googleMapRef.current.setCenter();
  //   // lat && setPosition({ lat, lng });
  //   // console.log(lat, lng, location, description);
  // };

  const [items, setItems] = useState(addressItems);

  return (
    <div>
      <div className="address">
        <Header></Header>
        <h1 className="address__title">Thông tin địa chỉ</h1>
        <div className="address__wrapper">
          <div className="address__wrapper__Menu">
            <div className="address__wrapper__Menu__accountsidebar">
              <h3 className="address__wrapper__Menu__accounttitle">
                Tài khoản
              </h3>
            </div>
            <div className="address__wrapper__Menu__accountcontent">
              <ul className="address__wrapper__Menu__accountcontent__list">
                <li>
                  <Link to="/user/information">
                    <ion-icon name="play-circle-outline"></ion-icon>
                    Thông tin tài khoản
                  </Link>
                </li>

                <li>
                  <a href="">
                    <ion-icon name="play-circle-outline"></ion-icon>
                    Danh sách địa chỉ
                  </a>
                </li>

                <li>
                  <a href="">
                    <ion-icon name="play-circle-outline"></ion-icon>
                    Đăng xuất
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="address__wrapper__list">
            {items.map((item, index) => (
              <AddressCard
                key={index}
                item={item}
                flag={state ? state.flag : null}
                onDelete={() => {
                  setItems(items.filter((i) => i != item));
                  //
                }}
                // onClick={() => {
                //   handleEdit(item);
                //   console.log("Click");
                // }}
              />
            ))}

            <Link
              to="edit"
              state={{
                name: null,
                lat: null,
                lng: null,
                location: "",
                description: "",
                phone: "",
              }}
              title="Sửa"
            >
              <button className="address__wrapper__list__Addbutton">
                {" "}
                Thêm địa chỉ mới
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
