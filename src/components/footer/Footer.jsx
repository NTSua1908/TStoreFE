import React from "react";
import { Link } from "react-router-dom";
import logoPNG from "../../assets/logo.png";
import "./footer.scss";

function Footer(props) {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__policy">
          <h3 className="footer__title"> Chính sách</h3>
          <ul>
            <li>
              <Link to="">Hướng dẫn mua hàng online</Link>
            </li>
            <li>
              <Link to="">Chính sách bảo hành </Link>
            </li>
            <li>
              <Link to="">Chính sách đổi trả</Link>
            </li>
            <li>
              <Link to="">Giao hành & Thanh toán</Link>
            </li>
            <li>
              <Link to="">Chính sách bảo mật</Link>
            </li>
          </ul>
        </div>
        <div className="footer__info">
          <h3 className="footer__title"> Giới thiệu</h3>
          <ul>
            <li>
              <Link to="">Giới thiệu công ty</Link>
            </li>
            <li>
              <Link to="">Tuyển dụng</Link>
            </li>
            <li>
              <Link to="">Góp ý, khiếu nại</Link>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <h3 className="footer__title"> Thông tin liên hệ</h3>
          <ul>
            <li>
              Email: <br />
              19522144@gm.uit.edu.vn <br />
              19522232@gm.uit.edu.vn
            </li>
            <li>
              Địa chỉ cửa hàng: Kí túc xá khu B, Tô Vĩnh Diện, Đường Mạc Đĩnh
              Chi, Đông Hoà, Dĩ An, Bình Dương
            </li>
          </ul>
        </div>
        <div className="footer__logo">
          <img src={logoPNG} alt="" />
          <h1>TSTORE</h1>
        </div>
      </div>
      <div className="footer__copyright">
        ©2022 Copyright, All Rights Reserved. Development by ThienSua-LongThanh
      </div>
      <div className="footer__up" title="Cuộn lên" onClick={handleScroll}>
        <ion-icon name="chevron-up-outline"></ion-icon>
      </div>
    </div>
  );
}

export default Footer;
