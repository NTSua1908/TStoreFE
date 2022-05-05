import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, {
  FreeMode,
  Navigation,
  Thumbs,
  EffectCube,
  Autoplay,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./sliderNewGame.scss";
import Button from "../../button/Button";

const gameItems = [
  {
    img: "https://ecdn.game4v.com/g4v-content/uploads/2020/02/Elden-Ring-2.jpg",
    name: "Elden Ring",
    id: 4,
    discount: "0",
    date: "1/1/2023",
    price: "120000",
    description:
      "Elden Ring là một trò chơi nhập vai hành động sắp ra mắt được phát triển bởi FromSoftware và được xuất bản bởi Bandai Namco Entertainment.",
  },
  {
    img: "http://m.gettywallpapers.com/wp-content/uploads/2021/09/Valheim-Phone-Wallpaper-576x1024.png",
    name: "Valheim",
    id: 5,
    discount: "0",
    date: "1/1/2023",
    price: "120000",
    description:
      "Elden Ring là một trò chơi nhập vai hành động sắp ra mắt được phát triển bởi FromSoftware và được xuất bản bởi Bandai Namco Entertainment.",
  },
  {
    img: "https://i.imgur.com/S4EkkyQ.png",
    name: "Deep Rock Galactic",
    id: 7,
    discount: "50",
    date: "1/1/2023",
    price: "120000",
    description:
      "Elden Ring là một trò chơi nhập vai hành động sắp ra mắt được phát triển bởi FromSoftware và được xuất bản bởi Bandai Namco Entertainment.",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/193/491/HD-wallpaper-battlefield-5-games-war.jpg",
    name: "Battlefield V",
    id: 11,
    discount: "15",
    date: "1/1/2023",
    price: "120000",
    description:
      "Elden Ring là một trò chơi nhập vai hành động sắp ra mắt được phát triển bởi FromSoftware và được xuất bản bởi Bandai Namco Entertainment.",
  },
  {
    img: "https://i.pinimg.com/736x/51/40/5d/51405de7464b8ca14d0df5aa03d9953b.jpg",
    name: "Far Cry 6",
    id: 1,
    discount: "40",
    date: "1/1/2023",
    price: "120000",
    description:
      "Elden Ring là một trò chơi nhập vai hành động sắp ra mắt được phát triển bởi FromSoftware và được xuất bản bởi Bandai Namco Entertainment.",
  },
  {
    img: "https://i.pinimg.com/474x/d0/47/6e/d0476e1ef8964bd3f35ddf1eee502667.jpg",
    name: "Free Fire",
    id: 3,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    description:
      "Elden Ring là một trò chơi nhập vai hành động sắp ra mắt được phát triển bởi FromSoftware và được xuất bản bởi Bandai Namco Entertainment.",
  },
  {
    img: "https://wallpapercave.com/wp/wp9495567.jpg",
    name: "Fifa 22",
    id: 13,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    description:
      "Elden Ring là một trò chơi nhập vai hành động sắp ra mắt được phát triển bởi FromSoftware và được xuất bản bởi Bandai Namco Entertainment.",
  },
  {
    img: "https://www.mobygames.com/images/covers/l/615038-europa-universalis-iv-windows-apps-front-cover.jpg",
    name: "Europa Universalis IV",
    id: 14,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    description:
      "Elden Ring là một trò chơi nhập vai hành động sắp ra mắt được phát triển bởi FromSoftware và được xuất bản bởi Bandai Namco Entertainment.",
  },
  {
    img: "https://baoninhsunrise.com/sniper-elite-4-download/imager_4_12639_700.jpg",
    name: "Sniper Elite 4",
    id: 15,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    description:
      "Elden Ring là một trò chơi nhập vai hành động sắp ra mắt được phát triển bởi FromSoftware và được xuất bản bởi Bandai Namco Entertainment.",
  },
  {
    img: "https://img.g2a.com/323x433/1x1x0/hitman-3-deluxe-edition-pc-green-gift-key-global/5f48d0687e696c5d204f8b32",
    name: "Hitman 3",
    id: 16,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    description:
      "Elden Ring là một trò chơi nhập vai hành động sắp ra mắt được phát triển bởi FromSoftware và được xuất bản bởi Bandai Namco Entertainment.",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/swros-wallpaper003_d911c0d4.jpeg",
    name: "War Star: The rise of skywalker",
    id: 17,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    description:
      "Elden Ring là một trò chơi nhập vai hành động sắp ra mắt được phát triển bởi FromSoftware và được xuất bản bởi Bandai Namco Entertainment.",
  },
  {
    img: "https://i.pinimg.com/originals/bc/3c/f8/bc3cf8a06d5287b2a3b59011f0d2916e.jpg",
    name: "The Outer Worlds",
    id: 18,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    description:
      "Elden Ring là một trò chơi nhập vai hành động sắp ra mắt được phát triển bởi FromSoftware và được xuất bản bởi Bandai Namco Entertainment.",
  },
  {
    img: "https://www.psu.com/wp/wp-content/uploads/2020/10/Far-Cry-6-PS5-Wallpapers-03-1.jpg",
    name: "Far Cry 6",
    id: 19,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    description:
      "Elden Ring là một trò chơi nhập vai hành động sắp ra mắt được phát triển bởi FromSoftware và được xuất bản bởi Bandai Namco Entertainment.",
  },
  {
    img: "https://haycafe.vn/wp-content/uploads/2021/12/Hinh-nen-hinh-anh-Lien-Quan.jpg",
    name: "Arena of Valor",
    id: 20,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    description:
      "Elden Ring là một trò chơi nhập vai hành động sắp ra mắt được phát triển bởi FromSoftware và được xuất bản bởi Bandai Namco Entertainment.",
  },
];

function SliderNewGame(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const swiperRef = useRef();

  useEffect(() => {
    swiperRef.current.swiper.on("mouseover", function (e) {});
    swiperRef.current.swiper.on("mouseleave", function (e) {
      swiperRef.current.swiper.startAutoplay();
    });
  }, []);

  const handleMouseOver = () => {
    swiperRef.current.swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current.swiper.autoplay.start();
  };

  return (
    <div className="home__slider-new-game">
      <div className="home__slider-new-game-container">
        <div
          className="home__slider-new-game__img--large"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            ref={swiperRef}
            thumbs={{ swiper: thumbsSwiper }}
            spaceBetween={5}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Thumbs, Autoplay]}
          >
            {gameItems.map((item, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div
                    className="home__slider-new-game__img--large-container"
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                    <div
                      className={`home__slider-new-game__img--large-content ${
                        isActive ? "active" : ""
                      }`}
                    >
                      <div className="home__slider-new-game__img--large-wrapper">
                        <div className="home__slider-new-game__img--large-content-btn-wrapper">
                          <Button className="btn btn-detail">Xem thêm</Button>
                        </div>
                        {item.discount != 0 && (
                          <p className="home__slider-new-game__img--large-content-new">
                            {(
                              item.price -
                              (item.price * item.discount) / 100
                            ).toLocaleString("en-US")}
                            đ
                          </p>
                        )}
                        <p
                          className={`home__slider-new-game__img--large-content-price  ${
                            item.discount != 0 &&
                            "home__slider-new-game__img--large-content-old"
                          }`}
                        >
                          {(item.price * 1).toLocaleString("en-US")}đ
                        </p>
                        <p className="home__slider-new-game__img--large-content-description">
                          {item.description}
                        </p>
                        <h1>{item.name}</h1>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="home__slider-new-game__wrapper">
          <Swiper
            className="home__slider-new-game__slider"
            onSwiper={setThumbsSwiper}
            freeMode={true}
            modules={[Autoplay, FreeMode, Navigation, Thumbs]}
            //grabCursor={true}
            centeredSlides={true}
            spaceBetween={5}
            slidesPerView={4}
            loop={true}
            direction={"vertical"}
            // autoplay= {
            // { delay: 2000,
            //   disableOnInteraction: false}
            // }
          >
            {gameItems.map((item, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => {
                  //setIndex(index)
                  return (
                    <div
                      //onClick={()=>{
                      //   console.log(index)
                      //   var currentIndex = index-1
                      //   //if (currentIndex < 0) currentIndex = 0//gameItems.length
                      //     swiperRef.current.swiper.slideTo(currentIndex)
                      // }}
                      className={`home__slider-new-game__img--small ${
                        isActive ? "active" : ""
                      }`}
                      style={{ backgroundImage: `url(${item.img})` }}
                    ></div>
                  );
                }}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SliderNewGame;
