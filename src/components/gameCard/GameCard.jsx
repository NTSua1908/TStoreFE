import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./gameCard.scss";

function GameCard(props) {
  const item = props.item;

  return (
    <Link to={`/detail/${item.id}`} className="Gamecard">
      <div className="Gamecard-wrapper">
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
      </div>
    </Link>
  );
}

export default GameCard;
