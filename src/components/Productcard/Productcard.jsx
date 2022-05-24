import React, { useEffect, useRef, useState } from "react";

import "./productcard.scss";

function Productcard(props) {
  const item = props.item;
  const [amount, setAmount] = useState(1);

  return (
    <div className="productcard">
      <div className="productcard__wrapper">
        <div className="productcard__wrapper-img">
          <img src={item.img} alt="" />
        </div>
        <div className="productcard__wrapper-content">
          <div className="productcard__wrapper-content-container">
            <h3 className="productcard__wrapper-content-container-gamename">
              {item.name}
            </h3>
            <div className="productcard__wrapper-content-container-quantity">
              <input
                type="button"
                value="-"
                class="productcard__wrapper-content-container-quantity__minus"
                onClick={() => {
                  amount > 0 && setAmount(amount - 1);
                }}
              />
              <input
                type="text"
                step="1"
                min="1"
                name="quantity"
                title="Qty"
                value={amount}
                class="productcard__wrapper-content-container-quantity__text"
                size="4"
                pattern=""
                inputmode=""
              />
              <input
                type="button"
                value="+"
                class="productcard__wrapper-content-container-quantity__plus"
                onClick={() => {
                  setAmount(amount + 1);
                }}
              />
            </div>
            <span className="productcard__wrapper-content-container-cost">
              {item.price} đ
            </span>
          </div>

          <div
            className="productcard__wrapper-content-delete"
            onClick={props.onDelete}
          >
            <ion-icon name="trash-sharp"></ion-icon>
          </div>
        </div>
      </div>

      <div className="productcard__cost">
        <span>Thành tiền:</span>
        <span className="productcard__cost-price">{item.price * amount} đ</span>
      </div>
    </div>
  );
}

export default Productcard;
