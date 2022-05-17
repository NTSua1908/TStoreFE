import React, { useEffect, useState } from "react";
import SliderGameDetail from "../../components/slider/SliderGamedetail/SliderGameDetail";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GameList from "../../components/gameList/GameList";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import "./gamedetail.scss";
import GameService from "../../services/GameService";
import { useParams } from "react-router-dom";
const percentage = 66;
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
    img: "https://game6.vn/assets/uploads/files/1645583133919-0.jpg",
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

function Gamedetail(props) {
  const [game, setGame] = useState({
    id: "",
    name: "",
    images: [],
    thumbnailHorizontal: "",
    thumbnailVertical: "",
    trailer: "",
    banner: "",
    price: 0,
    quantity: 0,
    discount: 0,
    developer: "",
    publisher: "",
    provider: {
      name: "",
    },
    releaseDate: "",
    types: [],
    expirationDate: "",
    positiveReview: "",
    negativeReview: "",
    overallReview: "",
    description: "",
    content: "",
    flatform: {
      name: " ",
    },
  });

  const { id } = useParams();

  useEffect(() => {
    GameService.getGameById(id)
      .then((res) => {
        setGame(res.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="gamedetail">
      <Header />
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
            <span className="">{game.name}</span>
          </div>
          <span className="gamedetail__title__gamename">{game.name}</span>
        </div>

        <div className="gamedetail__introduction">
          {/* slider */}
          <div className="gamedetail__introduction__swipersection">
            <SliderGameDetail items={game.images} />

            {/* description */}
            <div className="gamedetail__introduction__swipersection__beginning">
              {game.description}
            </div>
            <div className="gamedetail__introduction__swipersection__content">
              <div dangerouslySetInnerHTML={{ __html: game.content }}></div>
              {/*<h3>Elden ring siêu khó nhưng hấp dẫn</h3>
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
              </p> */}
            </div>
            {/* end-desciption */}
          </div>
          {/* end-slider */}

          {/* infor game */}
          <div className="gamedetail__introduction__inforsection">
            <div className="gamedetail__introduction__infor">
              <div className="gamedetail__introduction__infor__img">
                <img
                  src={game.banner} //"https://picfiles.alphacoders.com/409/409317.png"
                  alt=""
                />
              </div>

              <div className="gamedetail__introduction__infor__wrapper">
                <div className="gamedetail__introduction__infor__wrapper__pricecontainer">
                  <div className="gamedetail__introduction__infor__wrapper__pricecontainer__sale">
                    <span className="gamedetail__introduction__infor__wrapper__pricecontainer__sale__text">
                      -{game.discount}%
                    </span>
                  </div>
                  <div className="gamedetail__introduction__infor__wrapper__pricecontainer__price">
                    <div className="gamedetail__introduction__infor__wrapper__pricecontainer__price__oldprice">
                      {game.price.toLocaleString("en-US")}đ
                    </div>
                    <div className="gamedetail__introduction__infor__wrapper__pricecontainer__price__newprice">
                      {(
                        game.price -
                        (game.price * game.discount) / 100
                      ).toLocaleString("en-US")}
                      đ
                    </div>
                  </div>
                </div>

                <div className="gamedetail__introduction__infor__wrapper__dateofsale">
                  Kết thúc giảm giá vào ngày {game.expirationDate}
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
                  />
                  <input
                    type="text"
                    step="1"
                    min="1"
                    name="quantity"
                    value="1"
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
                    {game.developer}
                  </div>
                </div>
                <div className="gamedetail__introduction__infor__wrapper__productinfor__publisher">
                  <span>Nhà phát hành</span>
                  <div className="gamedetail__introduction__infor__wrapper__productinfor__pulisher__name">
                    {game.publisher}
                  </div>
                </div>
                <div className="gamedetail__introduction__infor__wrapper__productinfor__releasedate">
                  <span>Ngày phát hành</span>
                  <div className="gamedetail__introduction__infor__wrapper__productinfor__releasedate__date">
                    {game.releaseDate}
                  </div>
                </div>
                <div className="gamedetail__introduction__infor__wrapper__productinfor__platform">
                  <span>Các nền tảng</span>
                  <div className="gamedetail__introduction__infor__wrapper__productinfor__platform__name">
                    {game.flatform.name}
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

        <div className="gamedetail__rating">
          <span className="gamedetail__rating__title">Đánh giá</span>
          <div className="gamedetail__rating__chart">
            <div className="gamedetail__rating__chart__tichcuc">
              <CircularProgressbar
                value={game.positiveReview}
                strokeWidth={5}
                text={`${game.positiveReview}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  textColor: "#fff",
                  pathColor: `rgb(255, 199, 96)`,
                  trailColor: `rgb(29, 29, 29)`,
                })}
              />
              <span>Đánh giá tích cực</span>
            </div>

            <div className="gamedetail__rating__chart__tieucuc">
              <CircularProgressbar
                value={game.negativeReview}
                strokeWidth={5}
                text={game.negativeReview}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  textColor: "#fff",
                  pathColor: `rgb(255, 199, 96)`,
                  trailColor: `rgb(29, 29, 29)`,
                })}
              />
              <span>Đánh giá tiêu cực</span>
            </div>

            <div className="gamedetail__rating__chart__tongquan">
              <CircularProgressbar
                value={game.overallReview}
                minValue={1}
                maxValue={5}
                strokeWidth={5}
                text={game.overallReview}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "16px",
                  textColor: "#fff",
                  pathColor: `rgb(255, 199, 96)`,
                  trailColor: `rgb(29, 29, 29)`,
                })}
              />
              <span>Tổng quan</span>
            </div>
          </div>
        </div>

        <div className="gamedetail__gamelienquan">
          <span className="gamedetail__gamelienquan__title">
            Sản phẩm liên quan
          </span>
          <GameList
            class="gamedetail__gamelienquan__gamelist"
            item={gameItems}
          />
        </div>

        <div className="gamedetail__gamedaxem">
          <span className="gamedetail__gamedaxem__title">Sản phẩm đã xem</span>
          <GameList class="gamedetail__gamedaxem__gamelist" item={gameItems} />
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default Gamedetail;
