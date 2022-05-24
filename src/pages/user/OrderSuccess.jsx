import React from "react";
import ReactDOM from "react-dom";
import Congratulation_notice from "../../components/Congratulation_notice/Congratulation_notice";
import Confetti from "react-confetti";

import "./orderSuccess.scss";

function OrderSuccess(props) {
  return (
    <div className="OrderSuccess">
      <Confetti></Confetti>
      <div className="OrderSuccess-container">
        <ion-icon className="OrderSuccess-container-logo" name="bag-check" />
        <p className="OrderSuccess-container-thankyou">Cám ơn bạn !!!</p>
        <h1 className="OrderSuccess-container-notice">Đặt hàng thành công</h1>
        <div className="OrderSuccess-container-button">
          <button className="OrderSuccess-container-button-return">
            Quay về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
