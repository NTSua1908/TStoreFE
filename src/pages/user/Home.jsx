import React from "react";
import { Link } from "react-router-dom";
import GameGrid from "../../components/gameGrid/GameGrid";
import GameList from "../../components/gameList/GameList";
import Logo3D from "../../components/logo3D/Logo3D";
import Search from "../../components/search/Search";
import Slider from "../../components/slider/Slider";
import SliderNewGame from "../../components/slider/SliderNewGame/SliderNewGame";
import Footer from "../../components/footer/Footer";
import "./home.scss";
import HomePopUp from "../../components/homePopup/HomePopUp";
import Header from "../../components/header/Header";

const gameItems = [
  {
    img: "https://ecdn.game4v.com/g4v-content/uploads/2020/02/Elden-Ring-2.jpg",
    name: "Elden Ring",
    id: 4,
    discount: "10",
    date: "1/1/2023",
    price: "120000",
    consoles: "PS4",
  },
  {
    img: "http://m.gettywallpapers.com/wp-content/uploads/2021/09/Valheim-Phone-Wallpaper-576x1024.png",
    name: "Valheim",
    id: 5,
    discount: "90",
    date: "1/1/2023",
    price: "120000",
    consoles: "PS4",
  },
  {
    img: "https://i.imgur.com/S4EkkyQ.png",
    name: "Deep Rock Galactic",
    id: 7,
    discount: "50",
    date: "1/1/2023",
    price: "120000",
    consoles: "PS4",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/193/491/HD-wallpaper-battlefield-5-games-war.jpg",
    name: "Battlefield V",
    id: 11,
    discount: "15",
    date: "1/1/2023",
    price: "120000",
    consoles: "PS4",
  },
  {
    img: "https://i.pinimg.com/736x/51/40/5d/51405de7464b8ca14d0df5aa03d9953b.jpg",
    name: "Far Cry 6",
    id: 1,
    discount: "40",
    date: "1/1/2023",
    price: "120000",
    consoles: "PS4",
  },
  {
    img: "https://i.pinimg.com/474x/d0/47/6e/d0476e1ef8964bd3f35ddf1eee502667.jpg",
    name: "Free Fire",
    id: 3,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    consoles: "PS4",
  },
  {
    img: "https://wallpapercave.com/wp/wp9495567.jpg",
    name: "Fifa 22",
    id: 13,
    discount: "0",
    date: "1/1/2023",
    price: "120000",
    consoles: "PS4",
  },
  {
    img: "https://www.mobygames.com/images/covers/l/615038-europa-universalis-iv-windows-apps-front-cover.jpg",
    name: "Europa Universalis IV",
    id: 14,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    consoles: "PS4",
  },
  {
    img: "https://baoninhsunrise.com/sniper-elite-4-download/imager_4_12639_700.jpg",
    name: "Sniper Elite 4",
    id: 15,
    discount: "0",
    date: "1/1/2023",
    price: "120000",
    consoles: "PS4",
  },
  {
    img: "https://img.g2a.com/323x433/1x1x0/hitman-3-deluxe-edition-pc-green-gift-key-global/5f48d0687e696c5d204f8b32",
    name: "Hitman 3",
    id: 16,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    consoles: "PS4",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/swros-wallpaper003_d911c0d4.jpeg",
    name: "War Star: The rise of skywalker",
    id: 17,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    consoles: "PS4",
  },
  {
    img: "https://i.pinimg.com/originals/bc/3c/f8/bc3cf8a06d5287b2a3b59011f0d2916e.jpg",
    name: "The Outer Worlds",
    id: 18,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    consoles: "PS4",
  },
  {
    img: "https://w0.peakpx.com/wallpaper/29/384/HD-wallpaper-wonderlands-borderlands-tiny-tina-tiny-tina-borderlands-tiny-tinas-wonderlands-borderlands-tiny-tina-thumbnail.jpg",
    name: "Tiny Tina's Wonderlands",
    id: 19,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    consoles: "PS4",
  },
  {
    img: "https://static.zerochan.net/Genshin.Impact.full.3033173.jpg",
    name: "Genshin Impact",
    id: 20,
    discount: "20",
    date: "1/1/2023",
    price: "120000",
    consoles: "PS4",
  },
];

function Home(props) {
  return (
    <div className="home">
      <Header />

      <div className="home__banner"></div>

      <div className="home__wrapper">
        <Search />
        <div className="home__title">
          <span>Game tiêu biểu nên xem</span>
        </div>
        <div className="home__mainslider">
          <Slider className="home__mainslider" />
        </div>

        <Link className="home__title" to="/popular">
          <span>
            Top game thịnh hành
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </Link>
        <GameList item={gameItems} />
        {/* <Logo3D /> */}

        <Link className="home__title" to="/discount">
          <span>
            Game mới cập nhật
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </Link>
        <SliderNewGame></SliderNewGame>

        <Link className="home__title" to="/discount">
          <span>
            Top game giảm giá
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </Link>
        <GameList item={gameItems} />
      </div>
      <Footer></Footer>
      <HomePopUp />
    </div>
  );
}

export default Home;
