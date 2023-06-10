import React, { useEffect, useRef, useState } from "react";
import Productcard from "../../components/Productcard/Productcard";
import Header from "../../components/header/Header";
import GameList from "../../components/gameList/GameList";
import Footer from "../../components/footer/Footer";

import { Link } from "react-router-dom";
import "./cart.scss";

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
    img: "https://i.pinimg.com/474x/d0/47/6e/d0476e1ef8964bd3f35ddf1eee502667.jpg",
    name: "Free Fire",
    id: 3,
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

function Cart(props) {
  const [items, setItems] = useState(gamelistItems);
  const [Gameprice, setGameprice] = useState();
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    var arrQuantity = [];
    items.forEach((item) => {
      arrQuantity = [...arrQuantity, 1];
      console.log(item);
    });
    setQuantity(arrQuantity);

    var sum = 0;
    sum = gamelistItems.reduce((sum, item) => sum + item.price, 0);
    setGameprice(sum);
  }, []);

  useEffect(() => {
    // console.log(quantity);
    var sum = 0;
    sum = gamelistItems.reduce(
      (sum, item, index) => sum + item.price * quantity[index],
      0
    );
    setGameprice(sum);
  }, [quantity]);

  return (
    <div className="Cart">
      <Header></Header>
      <div className="Cart__header">
        <span className="Cart__header-title">Giỏ hàng của bạn</span>
      </div>
      <div className="Cart__wrapper">
        <div className="Cart__wrapper-content">
          <p className="Cart__wrapper-content-number">
            Bạn đang có {items.length} sản phẩm trong giỏ hàng
          </p>

          {items.map((item, index) => (
            <Productcard
              key={index}
              index={index}
              item={item}
              onDelete={() => {
                setItems(items.filter((i) => i != item));
                //
              }}
              setQuantity={setQuantity}
              quantity={quantity}
              // onClick={() => {
              //   handleEdit(item);
              //   console.log("Click");
              // }}
            />
          ))}
        </div>

        <div className="Cart__wrapper-bill">
          <div className="Cart__wrapper-bill-container">
            <h2 className="Cart__wrapper-bill-container-title">
              Thông tin đơn hàng
            </h2>
            <div className="Cart__wrapper-bill-container-total_price">
              <span>Tổng tiền: </span>
              <span>{Gameprice} đ</span>
            </div>
            <div className="Cart__wrapper-bill-container-buttonsection">
              <Link to="/user/payment">
                <button className="Cart__wrapper-bill-container-button">
                  thanh toán
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Cart__continue-buy">
        <Link to="/">
          <button className="Cart__continue-buy-button">
            tiếp tục mua hàng
          </button>
        </Link>
      </div>
      <div className="Cart__gamedaxem">
        <span className="Cart__gamedaxem__title">Sản phẩm đã xem</span>
        <GameList class="Cart__gamedaxem__gamelist" item={gamelistItems} />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Cart;
