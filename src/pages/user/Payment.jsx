import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../user/payment.scss";
import logoPNG from "../../assets/logo.png";
import AddressCard from "../../components/addressCard/AddressCard";

const gamelistItems = [
  {
    img: "https://ecdn.game4v.com/g4v-content/uploads/2020/02/Elden-Ring-2.jpg",
    name: "Elden Ring",
    id: 4,
    discount: "10",
    date: "1/1/2023",
    price: 120000,
    consoles: "PS4",
  },
  {
    img: "http://m.gettywallpapers.com/wp-content/uploads/2021/09/Valheim-Phone-Wallpaper-576x1024.png",
    name: "Valheim",
    id: 5,
    discount: "90",
    date: "1/1/2023",
    price: 120000,
    consoles: "PS4",
  },
  {
    img: "https://i.imgur.com/S4EkkyQ.png",
    name: "Deep Rock Galactic",
    id: 7,
    discount: "50",
    date: "1/1/2023",
    price: 120000,
    consoles: "PS4",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/193/491/HD-wallpaper-battlefield-5-games-war.jpg",
    name: "Battlefield V",
    id: 11,
    discount: "15",
    date: "1/1/2023",
    price: 120000,
    consoles: "PS4",
  },
  {
    img: "https://i.pinimg.com/736x/51/40/5d/51405de7464b8ca14d0df5aa03d9953b.jpg",
    name: "Far Cry 6",
    id: 1,
    discount: "40",
    date: "1/1/2023",
    price: 120000,
    consoles: "PS4",
  },
  {
    img: "https://i.pinimg.com/474x/d0/47/6e/d0476e1ef8964bd3f35ddf1eee502667.jpg",
    name: "Free Fire",
    id: 3,
    discount: "20",
    date: "1/1/2023",
    price: 120000,
    consoles: "PS4",
  },
  {
    img: "https://wallpapercave.com/wp/wp9495567.jpg",
    name: "Fifa 22",
    id: 13,
    discount: "0",
    date: "1/1/2023",
    price: 120000,
    consoles: "PS4",
  },
  {
    img: "https://www.mobygames.com/images/covers/l/615038-europa-universalis-iv-windows-apps-front-cover.jpg",
    name: "Europa Universalis IV",
    id: 14,
    discount: "20",
    date: "1/1/2023",
    price: 120000,
    consoles: "PS4",
  },
  {
    img: "https://baoninhsunrise.com/sniper-elite-4-download/imager_4_12639_700.jpg",
    name: "Sniper Elite 4",
    id: 15,
    discount: "0",
    date: "1/1/2023",
    price: 120000,
    consoles: "PS4",
  },
  {
    img: "https://img.g2a.com/323x433/1x1x0/hitman-3-deluxe-edition-pc-green-gift-key-global/5f48d0687e696c5d204f8b32",
    name: "Hitman 3",
    id: 16,
    discount: "20",
    date: "1/1/2023",
    price: 120000,
    consoles: "PS4",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/swros-wallpaper003_d911c0d4.jpeg",
    name: "War Star: The rise of skywalker",
    id: 17,
    discount: "20",
    date: "1/1/2023",
    price: 120000,
    consoles: "PS4",
  },
  {
    img: "https://i.pinimg.com/originals/bc/3c/f8/bc3cf8a06d5287b2a3b59011f0d2916e.jpg",
    name: "The Outer Worlds",
    id: 18,
    discount: "20",
    date: "1/1/2023",
    price: 120000,
    consoles: "PS4",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/29/384/HD-wallpaper-wonderlands-borderlands-tiny-tina-tiny-tina-borderlands-tiny-tinas-wonderlands-borderlands-tiny-tina-thumbnail.jpg",
    name: "Tiny Tina's Wonderlands",
    id: 19,
    discount: "20",
    date: "1/1/2023",
    price: 120000,
    consoles: "PS4",
  },
  {
    img: "https://static.zerochan.net/Genshin.Impact.full.3033173.jpg",
    name: "Genshin Impact",
    id: 20,
    discount: "20",
    date: "1/1/2023",
    price: 120000,
    consoles: "PS4",
  },
];

const addressitem = {
  name: "Long Thành",
  location: "Linh Xuân, Thủ Đức, Thành phố Hồ Chí Minh, Đông Nam Bộ, Việt Nam",
  lat: 10.879610194004936,
  lng: 106.77905376740718,
  description: "Đây là mô tả cho địa điểm này",
  phone: "0357264861",
};

function Payment(props) {
  const method1 = useRef();
  const method2 = useRef();

  const [Gameprice, setGameprice] = useState();
  const [price, setPrice] = useState(17000);
  const [gameItems, setgameItems] = useState(gamelistItems);

  const handleradio = (e) => {
    if (e.target.value == "method1") {
      method1.current.classList.add("active");
      method2.current.classList.remove("active");
      setPrice(17000);
    } else {
      method2.current.classList.add("active");
      method1.current.classList.remove("active");
      setPrice(35000);
    }
    console.log(e.target.checked);
  };

  useEffect(() => {
    var input = method1.current.querySelector("input");
    input.checked = "true";
    method1.current.classList.add("active");
  }, []);

  useEffect(() => {
    var sum = 0;
    sum = gamelistItems.reduce((sum, item) => sum + item.price, 0);
    setGameprice(sum);
  }, []);

  return (
    <div className="Payment">
      <div className="Payment__header">
        <img src={logoPNG} alt="" />
        <div className="Payment__header__divider" />
        <span>Thanh toán</span>
      </div>

      <div className="Payment__wrapper">
        <div className="Payment__wrapper__column1">
          <div className="Payment__wrapper__column1-transfer_method">
            <span className="Payment__wrapper__title">
              Chọn hình thức giao hàng
            </span>
            <ul>
              <li ref={method1}>
                <div className="Payment__wrapper__column1-transfer_method__radio">
                  <input
                    id="radio1"
                    type="radio"
                    value="method1"
                    name="gender"
                    onChange={handleradio}
                    // checked
                  />
                  <label for="radio1">Giao hàng tiết kiệm</label>
                </div>

                <div className="Payment__wrapper__column1-transfer_method__detail">
                  <div className="Payment__wrapper__column1-transfer_method__detail-leftcontent">
                    <div className="Payment__wrapper__column1-transfer_method__detail-leftcontent-package">
                      <span>Giao vào thứ năm, 10/5</span>
                    </div>
                    <span>Giao tiết kiệm</span> <span>17.000đ</span>
                  </div>
                  <div className="Payment__wrapper__column1-transfer_method__detail-rightcontent">
                    <ion-icon name="rocket-sharp"></ion-icon>
                    <p>Được giao bởi GHTK Logistics (giao từ Hồ Chí Minh)</p>
                  </div>
                </div>
              </li>

              <li ref={method2}>
                <div className="Payment__wrapper__column1-transfer_method__radio">
                  <input
                    id="radio2"
                    type="radio"
                    value="method2"
                    name="gender"
                    onChange={handleradio}
                  />
                  <label for="radio2">Giao hàng hỏa tốc</label>
                </div>

                <div className="Payment__wrapper__column1-transfer_method__detail">
                  <div className="Payment__wrapper__column1-transfer_method__detail-leftcontent">
                    <div className="Payment__wrapper__column1-transfer_method__detail-leftcontent-package">
                      <span>Giao vào thứ ba, 7/5</span>
                    </div>
                    <span>Giao hàng hỏa tốc</span> <span>35.000đ</span>
                  </div>
                  <div className="Payment__wrapper__column1-transfer_method__detail-rightcontent">
                    <ion-icon name="rocket-sharp"></ion-icon>
                    <p>Được giao bởi GHN Logistics (giao từ Hồ Chí Minh)</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="Payment__wrapper__column1-payment_method">
            <span className="Payment__wrapper__title">
              Phương thức thanh toán
            </span>
            <ul>
              <li>
                <input id="" type="radio" value="" name="" checked />
                <label for="">Thanh toán tiền mặt khi nhận hàng</label>
              </li>
            </ul>
          </div>
        </div>

        <div className="Payment__wrapper__column2">
          <div className="Payment__wrapper__column2-address">
            <div className="Payment__wrapper__column2-address-header">
              <span>Giao tới</span>
              <Link to="/user/address" state={{ flag: "isPayment" }}>
                Thay đổi
              </Link>
            </div>
            <div className="Payment__wrapper__column2-address-user_infor">
              <h3 className="Payment__wrapper__column2-address-user_infor-name">
                {addressitem.name}
              </h3>
              <i></i>
              <h3 className="Payment__wrapper__column2-address-user_infor-phone">
                {addressitem.phone}
              </h3>
            </div>
            <p className="Payment__wrapper__column2-address-user-location">
              {addressitem.location}, {addressitem.description}
            </p>
          </div>

          <div className="Payment__wrapper__column2-bill">
            <div className="Payment__wrapper__column2-bill-header">
              <h3>Đơn hàng</h3>
              <div className="Payment__wrapper__column2-bill-header-amount">
                <span>{gameItems.length} sản phẩm.</span>
              </div>
            </div>
            <div className="Payment__wrapper__column2-bill-game_list">
              {gameItems.map((item, index) => {
                return (
                  <div className="Payment__wrapper__column2-bill-game_list-contain">
                    <div className="Payment__wrapper__column2-bill-game_list-contain-item">
                      <span className="Payment__wrapper__column2-bill-game_list-contain-item-amount">
                        1x
                      </span>
                      <span>{item.name}</span>
                    </div>

                    <span>{item.price} đ</span>
                  </div>
                );
              })}
            </div>
            <div className="Payment__wrapper__column2-bill-summary">
              <div className="Payment__wrapper__column2-bill-summary-temp__price">
                <span>Tạm tính</span> <span>{Gameprice} đ</span>
              </div>
              <div className="Payment__wrapper__column2-bill-summary-item__list">
                <span>Phí vận chuyển</span> <span>{price} đ</span>
              </div>
            </div>
            <div className="Payment__wrapper__column2-bill-total_cost">
              <span>Tổng tiền</span> <span>{Gameprice + price} đ</span>
            </div>
            <div className="Payment__wrapper__column2-bill-button">
              <button className="Payment__wrapper__column2-bill-button-order">
                {" "}
                <h3>Đặt hàng</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
