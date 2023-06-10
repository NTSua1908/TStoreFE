import React, { useState } from "react";
import SliderGameDetail from "../../components/slider/SliderGamedetail/SliderGameDetail";
import Footer from "../../components/footer/Footer";
import GameList from "../../components/gameList/GameList";
import Header from "../../components/header/Header";

import "./gamedetail.scss";
const gameItems = [
  {
    img: "https://images4.alphacoders.com/115/thumb-1920-1151249.jpg",
    name: "elden ring cover",
    id: 1,
    discount: "40",
    price: "150000",
  },
  {
    img: "https://ecdn.game4v.com/g4v-content/uploads/2022/01/29172938/game4v-elden-ring-1-1643452176-52.png",
    name: "elden ring img1",
    id: 2,
    discount: "0",
    price: "150000",
  },
  {
    img: "https://photo2.tinhte.vn/data/attachment-files/2022/02/5878106_Cover_EldenRing.jpg",
    name: "elden ring img3",
    id: 3,
    discount: "20",
    price: "150000",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_e80a907c2c43337e53316c71555c3c3035a1343e.1920x1080.jpg?t=1646817776",
    name: "Elden Ring img3",
    id: 4,
    discount: "10",
    price: "150000",
  },
  {
    img: "https://genk.mediacdn.vn/139269124445442048/2022/3/4/maxresdefault-2-1646358932735982595514.jpg",
    name: "elden ring img4",
    id: 5,
    discount: "90",
    price: "150000",
  },
  {
    img: "https://assets2.rockpapershotgun.com/maliketh-the-black-blade-elden-ring.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/maliketh-the-black-blade-elden-ring.jpg",
    name: "elden ring img5",
    id: 6,
    discount: "0",
    price: "150000",
  },
];

const gamelistItems = [
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

function Gamedetail(props) {
  const [amount, setAmount] = useState(1);
  return (
    <div className="gamedetail">
      <Header></Header>
      <div className="gamedetail__wrapper">
        <div className="gamedetail__title">
          <div className="gamedetail__title__typeofgame">
            <a className="gamedetail__title__typeofgame__home" href="">
              Trang chủ
            </a>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            <a className="gamedetail__title__typeofgame__kind" href="#">
              Thể loại: Hành động{" "}
            </a>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            <span className="">Elden Ring</span>
          </div>
          <span className="gamedetail__title__gamename">Elden ring</span>
        </div>

        <div className="gamedetail__introduction">
          {/* slider */}
          <div className="gamedetail__introduction__swipersection">
            <SliderGameDetail items={gameItems} />

            {/* description */}
            <div className="gamedetail__introduction__swipersection__beginning">
              Elden Ring cho PS4 có bán ở TStore là một siêu phẩm mới đến từ
              FromSoftware, nơi đã tạo nên dòng game Souls vô cùng nổi tiếng.
              Trò chơi sở hữu tính thử thách không thua gì những tiền bối Dark
              Souls trước đây của mình. Bên cạnh đó, bạn sẽ được chìm đắm vào
              một thế giới kỳ ảo vô cùng hung bạo, đáng sợ, nhưng cũng quyến rũ
              khó cưỡng.
            </div>
            <div className="gamedetail__introduction__swipersection__content">
              <h3>Elden ring siêu khó nhưng hấp dẫn</h3>
              <div className="gamedetail__introduction__swipersection__content__trailer">
                <iframe
                  className="gamedetail__introduction__swipersection__content__trailer__videoclip"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/K_03kFqWfqs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <p>
                THẾ GIỚI GIẢ TƯỞNG MỚI - Chu du khắp Lands Between, một thế giới
                giả tưởng hoàn toàn mới được chấp bút bởi Hidetaka Miyazaki,
                người đã làm ra loạt game Dark Souls nổi tiếng và nhà văn George
                R. R. Martin, tác giả tiểu thuyết A Song of Ice and Fire. Gặp gỡ
                những nhân vật có bối cảnh sâu xa, động cơ để họ giúp đỡ hoặc
                cản trở hành trình của bạn và không thể thiếu những tạo vật đáng
                sợ.
              </p>
              <img
                src="https://file.hstatic.net/1000231532/file/review_game_elden_ring_ps5_5e3ef249ad3548e2a59e6979f76a2fad.jpg"
                alt=""
              />
              <p>
                VÙNG ĐẤT RỘNG NHẤT TỪNG CÓ - Hệ thống hầm ngục và các khung cảnh
                hùng vĩ đan xen, kết nối liền mạnh với nhau. Thoải mái khám phá
                khắp mọi góc của thế giới hoành tráng nhất trên yên ngựa, trên
                đường bộ, một mình hoặc online với những người chơi khác. Từ
                đồng cỏ bát ngát, đầm lấy u tối, vách núi hiểm trở cho tới những
                lâu đài có điềm gỡ với quy mô chưa từng có trước đây của
                FromSoftware.
              </p>
              <img
                src="https://file.hstatic.net/1000231532/file/mua_game_elden_ring_ps5_gia_re_8e3ee304f37949fd9081c4517a6b6eba_grande.jpg"
                alt=""
              />
              <p>
                LỐI CHƠI ĐẶC TRƯNG CỦA GAME NHẬP VAI HÀNH ĐỘNG TỪ FROMSOFTWARE -
                Tạo nhân vật của bạn và tự tìm ra phong cách mà bạn thích thông
                qua hàng loạt vũ khí, phép thuật, kĩ năng tìm được khắp thế
                giới. Lao thẳng vào trận chiến, hạ gục từng kẻ địch một cách lén
                lút hay thậm chí là gọi đồng minh tới hỗ trợ. Rất nhiều lựa chọn
                tùy theo ý bạn để thăm dò, chiến đấu theo cách bạn muốn.
              </p>
            </div>
            {/* end-desciption */}
          </div>
          {/* end-slider */}

          {/* infor game */}
          <div className="gamedetail__introduction__inforsection">
            <div className="gamedetail__introduction__infor">
              <div className="gamedetail__introduction__infor__img">
                <img
                  src="https://picfiles.alphacoders.com/409/409317.png"
                  alt=""
                />
              </div>

              <div className="gamedetail__introduction__infor__wrapper">
                <div className="gamedetail__introduction__infor__wrapper__pricecontainer">
                  <div className="gamedetail__introduction__infor__wrapper__pricecontainer__sale">
                    <span className="gamedetail__introduction__infor__wrapper__pricecontainer__sale__text">
                      -75%
                    </span>
                  </div>
                  <div className="gamedetail__introduction__infor__wrapper__pricecontainer__price">
                    <div className="gamedetail__introduction__infor__wrapper__pricecontainer__price__oldprice">
                      900.000đ
                    </div>
                    <div className="gamedetail__introduction__infor__wrapper__pricecontainer__price__newprice">
                      300.000đ
                    </div>
                  </div>
                </div>

                <div className="gamedetail__introduction__infor__wrapper__dateofsale">
                  Kết thúc giảm giá vào 14/4/2022 10:00 PM
                </div>
              </div>

              <button className="gamedetail__introduction__infor__wrapper__buttonbuynow">
                Mua ngay
              </button>

              <div className="gamedetail__introduction__infor__wrapper__addcartcontainer">
                <div className="gamedetail__introduction__infor__wrapper__addcartcontainer__quantity">
                  <input
                    type="button"
                    value="-"
                    class="gamedetail__introduction__infor__wrapper__addcartcontainer__quantity__minus"
                    onClick={() => {
                      amount > 0 && setAmount(amount - 1);
                    }}
                  />
                  <input
                    type="text"
                    step="1"
                    min="1"
                    name="quantity"
                    value={amount}
                    title="Qty"
                    class="gamedetail__introduction__infor__wrapper__addcartcontainer__quantity__text"
                    size="4"
                    pattern=""
                    inputmode=""
                  />
                  <input
                    type="button"
                    value="+"
                    class="gamedetail__introduction__infor__wrapper__addcartcontainer__quantity__plus"
                    onClick={() => {
                      setAmount(amount + 1);
                    }}
                  />
                </div>
                <button className="gamedetail__introduction__infor__wrapper__addcartcontainer__buttonaddcart">
                  thêm vào giỏ hàng
                </button>
              </div>

              <div className="gamedetail__introduction__infor__wrapper__productinfor">
                <div className="gamedetail__introduction__infor__wrapper__productinfor__developer">
                  <span>Nhà phát triển</span>
                  <div className="gamedetail__introduction__infor__wrapper__productinfor__developer__name">
                    FromSoftware Inc.
                  </div>
                </div>
                <div className="gamedetail__introduction__infor__wrapper__productinfor__publisher">
                  <span>Nhà phát hành</span>
                  <div className="gamedetail__introduction__infor__wrapper__productinfor__pulisher__name">
                    Bandai Namco
                  </div>
                </div>
                <div className="gamedetail__introduction__infor__wrapper__productinfor__releasedate">
                  <span>Ngày phát hành</span>
                  <div className="gamedetail__introduction__infor__wrapper__productinfor__releasedate__date">
                    25 tháng 2, 2022
                  </div>
                </div>
                <div className="gamedetail__introduction__infor__wrapper__productinfor__platform">
                  <span>Các nền tảng</span>
                  <div className="gamedetail__introduction__infor__wrapper__productinfor__platform__name">
                    PlayStation 4, Xbox Series X và Series S, Xbox One,
                    PlayStation 5
                  </div>
                </div>

                <div className="gamedetail__introduction__infor__wrapper__productinfor__gamemode">
                  <span>Chế độ chơi</span>
                  <div className="gamedetail__introduction__infor__wrapper__productinfor__gamemode__name">
                    Một người chơi
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end-infor game */}
        </div>

        {/* <div className="gamedetail__rating">
              <span className="gamedetail__rating__title">Đánh giá</span>
              <div className="gamedetail__rating__chart">
                <div className="gamedetail__rating__chart__tichcuc">
                  <CircularProgressbar 
                  value={percentage} 
                  strokeWidth={5}
                  text={`${percentage}%`} 
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textSize: '16px',
                    textColor: '#fff',
                    pathColor: `rgb(255, 199, 96)`,
                    trailColor: `rgb(29, 29, 29)`,
                  })}/>
                  <span>Đánh giá tích cực</span>
                </div>

                <div className="gamedetail__rating__chart__tieucuc">
                  <CircularProgressbar 
                    value={85} 
                    strokeWidth={5}
                    text={`85%`} 
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      textSize: '16px',
                      textColor: '#fff',
                      pathColor: `rgb(255, 199, 96)`,
                      trailColor: `rgb(29, 29, 29)`,
                    })}/>
                    <span>Đánh giá tiêu cực</span>
                </div>

                <div className="gamedetail__rating__chart__tongquan">
                <CircularProgressbar 
                    value={3.5} 
                    minValue={1}
                    maxValue={5}
                    strokeWidth={5}
                    text={`3.5`} 
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      textSize: '16px',
                      textColor: '#fff',
                      pathColor: `rgb(255, 199, 96)`,
                      trailColor: `rgb(29, 29, 29)`,
                    })}/>
                  <span>Tổng quan</span>
                </div>
              </div>
            </div> */}

        <div className="gamedetail__gamelienquan">
          <span className="gamedetail__gamelienquan__title">
            Sản phẩm liên quan
          </span>
          <GameList
            class="gamedetail__gamelienquan__gamelist"
            item={gamelistItems}
          />
        </div>

        <div className="gamedetail__gamedaxem">
          <span className="gamedetail__gamedaxem__title">Sản phẩm đã xem</span>
          <GameList
            class="gamedetail__gamedaxem__gamelist"
            item={gamelistItems}
          />
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default Gamedetail;
