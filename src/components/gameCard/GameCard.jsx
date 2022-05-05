import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./gameCard.scss";

function GameCard(props) {
  const item = props.item;
  const [like, setLike] = useState(item.like);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div to={`/detail/${item.id}`} className="gamecard">
      <div className="gamecard-wrapper">
        <div className="gamecard__img">
          <div
            className="gamecard__img-thumbnail"
            style={{ backgroundImage: `url(${item.img})` }}
          ></div>
          <div className="gamecard__img-hover">
            <div className="gamecard__img-hover-container">
              <h1 className="gamecard__img-hover-name">{item.name}</h1>
              <div
                className="gamecard__img-hover-wishlist"
                title="Thêm vào danh sách yêu thích"
                onClick={handleLike}
              >
                {like ? (
                  <ion-icon name="heart"></ion-icon>
                ) : (
                  <ion-icon name="heart-outline"></ion-icon>
                )}
              </div>
              <Button className="btn btn-detail">Xem thêm</Button>
            </div>
          </div>
        </div>
        <div className="gamecard__content">
          <h1 className="gamecard__content-name">{item.name}</h1>
          <span className="gamecard__content-consoles">{item.consoles}</span>
          <div className="gamecard__content-price">
            {item.discount != 0 && (
              <span className="gamecard__content-price--new">
                {(
                  item.price -
                  (item.price * item.discount) / 100
                ).toLocaleString("en-US")}
                đ
              </span>
            )}
            <span
              className={`gamecard__content-price--old ${
                item.discount == 0 && "same"
              }`}
            >
              {(item.price * 1).toLocaleString("en-US")}đ
            </span>
          </div>
        </div>
        {item.discount != 0 && (
          <div className="gamecard__discount">
            <span>-{item.discount}%</span>
          </div>
        )}
      </div>
      {/* <div className="Gamecard-wrapper">
        <div
          className="Gamecard-wrapper__img"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="Gamecard-wrapper__img-cart" title="Thêm vào giỏ hàng">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>
        {item.discount != 0 && (
          <div className="Gamecard-wrapper__discount">
            <span>Giảm {item.discount}%</span>
          </div>
        )}
        <div className="Gamecard-wrapper__content">
          <h3>{item.name}</h3>
          <p
            className={`Gamecard-wrapper__content-price  ${
              item.discount != 0 && "Gamecard-wrapper__content-old"
            }`}
          >
            {(item.price * 1).toLocaleString("en-US")}đ
          </p>
          {item.discount != 0 && (
            <p className="Gamecard-wrapper__content-new">
              {(item.price - (item.price * item.discount) / 100).toLocaleString(
                "en-US"
              )}
              đ
            </p>
          )}
        </div>
      </div> */}
    </div>
  );
}

export default GameCard;
