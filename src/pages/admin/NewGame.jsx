import React, { useState, useEffect, useRef } from "react";
import DropdownList from "../../components/dropdownList/DropdownList";
import Editor from "../../components/editor/Editor";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar_admin/Navbar";
import Siderbar from "../../components/siderbar/Siderbar";
import FlatformService from "../../services/FlatformService";
import GameService from "../../services/GameService";
import GameTypeService from "../../services/GameTypeService";
import ProviderService from "../../services/ProviderService";
import "./newgame.scss";

const user = {
  name: "Nguyen Thien Sua",
  avatar: "https://demoda.vn/wp-content/uploads/2022/03/avatar-nam.jpg",
};

// const types = [
//   "Hành động",
//   "Indie",
//   "RPG",
//   "Chiến lược",
//   "Sống sót",
//   "Rogue-Lite",
//   "Cuộc phiêu lưu",
//   "Mở rộng thế giới",
//   "Người bắn súng",
//   "Ghép hình",
//   "Ngôi thứ nhất",
//   "Tường thuật",
//   "Mô phỏng",
//   "Bình thường",
//   "Theo lượt",
//   "Thăm dò",
//   "Kinh dị",
//   "Người khai thác",
//   "Buổi tiệc",
//   "Thông tin bên lề",
//   "Người xây dựng thành phố",
//   "Tàng hình",
//   "Trận đánh",
//   "Phim hài",
//   "Phiêu lưu hành động",
//   "Cuộc đua",
//   "Chơi bài",
//   "Các môn thể thao",
//   "Dungeon Crawler",
// ];

// const flatfroms = [
//   "PlayStation 4",
//   "Xbox Series X",
//   "Series S",
//   "Xbox One",
//   "PlayStation 5",
// ];

function NewGame(props) {
  const [providers, setProviders] = useState([]);
  const [types, setTypes] = useState([]);
  const [flatforms, setFlatforms] = useState([]);

  useEffect(() => {
    ProviderService.getProviders().then((res) => {
      setProviders(res.data);
    });
    GameTypeService.getGameTypes().then((res) => {
      setTypes(res.data);
    });
    FlatformService.getFlatforms().then((res) => {
      setFlatforms(res.data);
    });
    // console.log("new game");
  }, []);

  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [developer, setDeveloper] = useState("");
  const [publisher, setPublisher] = useState("");
  const [provider, setProvider] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [releaseDate, setReleaseDate] = useState(new Date());
  const [flatform, setFlatform] = useState("");
  const [type, setType] = useState([]);
  const [discount, setDiscount] = useState("");
  const [expirationDate, setExpirationDate] = useState(new Date());
  const [positiveReview, setPositiveReview] = useState("");
  const [negativeReview, setNegativeReview] = useState("");
  const [overallReview, setOverallReview] = useState("");
  const [image, setImage] = useState([]);
  const [images, setImages] = useState([]);
  const [thumbnailHorizontal, setThumbnailHorizontal] = useState("");
  const [thumbnailVertical, setThumbnailVertical] = useState("");
  const [trailer, setTrailer] = useState("");
  const [banner, setBanner] = useState("");

  const containerRef = useRef();
  const sliderRef = useRef();

  const handleActiveMenu = () => {
    containerRef.current.classList.toggle("active");
    sliderRef.current.active();
    console.log("Active");
  };

  useEffect(() => {
    console.log(provider);
  }, [provider]);

  return (
    <div className="newgame">
      <Siderbar ref={sliderRef} active={3} />
      <div className="newgame__container" ref={containerRef}>
        <Navbar handleActiveMenu={handleActiveMenu} user={user} />
        <div className="newgame__wrapper">
          <h2 className="newgame__title">Thêm đĩa game</h2>
          <div className="newgame__input">
            <span className="newgame__input-title">Thông tin cơ bản</span>
            <div className="newgame__input-wrapper">
              <div className="newgame__input-wrapper-block">
                <Input
                  placeholder="Tên game"
                  value={name}
                  onChange={setName}
                  inWhite
                  small
                />
                <Input
                  placeholder="Tên nhà phát triển"
                  value={developer}
                  onChange={setDeveloper}
                  inWhite
                  small
                />

                <Input
                  placeholder="Nhà phát hành"
                  value={publisher}
                  onChange={setPublisher}
                  inWhite
                  small
                />
                <DropdownList
                  title="Nhà cung cấp"
                  item={providers}
                  name="Provider"
                  inWhite
                  selected={provider}
                  setSelected={setProvider}
                  one
                />
              </div>
              <div className="border-center"></div>
              <div className="newgame__input-wrapper-block">
                <div
                  className="newgame__input-wrapper"
                  style={{ padding: "0" }}
                >
                  <Input
                    placeholder="Giá"
                    value={price}
                    onChange={setPrice}
                    inWhite
                    small
                    isNumber
                  />
                  <div className="block-center"></div>
                  <Input
                    placeholder="Số lượng"
                    value={quantity}
                    onChange={setQuantity}
                    inWhite
                    small
                    isNumber
                  />
                </div>
                <Input
                  placeholder="Ngày phát hành"
                  value={releaseDate}
                  onChange={setReleaseDate}
                  inWhite
                  small
                  isDate
                />
                <DropdownList
                  title="Thể loại"
                  item={types}
                  name="Type"
                  inWhite
                  selected={type}
                  setSelected={setType}
                />

                <DropdownList
                  title="Nền tảng"
                  item={flatforms}
                  name="Flatform"
                  inWhite
                  selected={flatform}
                  setSelected={setFlatform}
                  one
                />
              </div>
            </div>

            <span className="newgame__input-title">Thông tin giảm giá</span>
            <div className="newgame__input-wrapper">
              <Input
                placeholder="Phần trăm giảm giá"
                value={discount}
                onChange={setDiscount}
                inWhite
                small
                isNumber
              />
              <div className="block-center"></div>
              <Input
                placeholder="Ngày giảm giá kết thúc"
                value={expirationDate}
                onChange={setExpirationDate}
                inWhite
                small
                isDate
              />
            </div>

            <span className="newgame__input-title">Thông tin đánh giá</span>
            <div className="newgame__input-wrapper">
              <Input
                placeholder="Đánh giá tích cực"
                value={positiveReview}
                onChange={setPositiveReview}
                inWhite
                small
                isNumber
              />
              <div className="block-center"></div>
              <Input
                placeholder="Đánh giá tiêu cực"
                value={negativeReview}
                onChange={setNegativeReview}
                inWhite
                small
                isNumber
              />
              <div className="block-center"></div>
              <Input
                placeholder="Đánh giá tổng thể"
                value={overallReview}
                onChange={setOverallReview}
                inWhite
                small
                isNumber
              />
            </div>

            <span className="newgame__input-title">Hình ảnh game</span>

            <div className="newgame__input-wrapper">
              <Input
                placeholder="Link banner"
                value={banner}
                onChange={setBanner}
                inWhite
                small
              />
              {banner && <div className="block-center"></div>}

              <img className="newgame__input-imageReview" src={banner} alt="" />
            </div>
            <div className="newgame__input-wrapper">
              <Input
                placeholder="Link ảnh bìa ngang"
                value={thumbnailHorizontal}
                onChange={setThumbnailHorizontal}
                inWhite
                small
              />
              {thumbnailHorizontal && <div className="block-center"></div>}

              <img
                className="newgame__input-imageReview"
                src={thumbnailHorizontal}
                alt=""
              />
            </div>
            <div className="newgame__input-wrapper">
              <Input
                placeholder="Link ảnh bìa dọc"
                value={thumbnailVertical}
                onChange={setThumbnailVertical}
                inWhite
                small
              />
              {thumbnailVertical && <div className="block-center"></div>}

              <img
                className="newgame__input-imageReview"
                src={thumbnailVertical}
                alt=""
              />
            </div>
            <div className="newgame__input-wrapper">
              <Input
                placeholder="Link trailer"
                value={trailer}
                onChange={setTrailer}
                inWhite
                small
              />
              {trailer && (
                <>
                  <div className="block-center"></div>
                  <iframe
                    className="newgame__input-imageReview"
                    src={trailer}
                    allowfullscreen
                    frameborder="0"
                    alt=""
                  />{" "}
                </>
              )}
            </div>
            <div className="newgame__input-wrapper">
              <Input
                placeholder="Link ảnh"
                value={image}
                onChange={setImage}
                inWhite
                small
              />
              <div className="block-center"></div>

              <button
                className="newgame__button"
                onClick={() => {
                  setImages([...images, image]);
                }}
              >
                Thêm
              </button>
            </div>
            <div className="newgame__gridImage">
              {images.map((item, index) => (
                <div className="newgame__gridImage-container" key={index}>
                  <img src={item} alt="" />
                  <div
                    className="newgame__gridImage-container-close"
                    title="Xóa"
                    onClick={() => {
                      setImages(images.filter((i) => i != item));
                    }}
                  >
                    <ion-icon name="close-circle-outline"></ion-icon>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Editor
            onBlur={(data) => {
              setContent(data);
            }}
            value={content}
          />
          <div style={{ marginTop: "10px" }}>
            <button
              className="newgame__button"
              onClick={() => {
                let game = {
                  name,
                  thumbnailHorizontal,
                  thumbnailVertical,
                  trailer,
                  banner,
                  images,
                  price,
                  quantity,
                  discount,
                  developer,
                  publisher,
                  providerId: provider,
                  releaseDate, //: "2022-5-12",
                  flatformId: flatform,
                  type,
                  expirationDate, //: "2022-5-12",
                  positiveReview, //: "1",
                  negativeReview, //: "2",
                  overallReview, //: "3",
                  description: "",
                  content, //: "content ne",
                };
                console.log(JSON.stringify(game));
                GameService.createGame(game);

                // images.forEach(item => {
                //   var image = {
                //     image: item,
                //     gameId:
                //   }
                // });
              }}
            >
              Thêm đĩa
            </button>
          </div>
        </div>

        {/* {console.log(typeof data)} */}
        {/* {<div dangerouslySetInnerHTML={{ __html: content }}></div>} */}
      </div>
    </div>
  );
}

export default NewGame;
