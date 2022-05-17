import React from "react";
import ReactDOM from "react-dom";
import Confetti from "react-confetti";

import "./congratulation_notice.scss";

function Congratulation_notice(props) {
  return (
    <div className="Congratulation_notice">
      <div className="Congratulation_notice-container">
        <Confetti className="canvas" numberOfPieces={300} gravity={0.17} />
        <ion-icon
          className="Congratulation_notice-container-logo"
          name="bag-check"
        />
        <p className="Congratulation_notice-container-thankyou">
          Cám ơn bạn !!!
        </p>
        <h1 className="Congratulation_notice-container-notice">
          Đặt hàng thành công
        </h1>
      </div>
    </div>
  );
}

export default Congratulation_notice;
