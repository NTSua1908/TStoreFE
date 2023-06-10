import React from "react";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import "./userInfor.scss";
import { Link } from "react-router-dom";

function UserInfor(props) {
  return (
    <div className="UserInfor">
      <Header />
      <span className="UserInfor__title">Tài khoản của bạn</span>
      <div className="UserInfor__wrapper">
        <div className="UserInfor__wrapper__Menu">
          <div className="UserInfor__wrapper__Menu__accountsidebar">
            <h3 className="UserInfor__wrapper__Menu__accounttitle">
              Tài khoản
            </h3>
          </div>
          <div className="UserInfor__wrapper__Menu__accountcontent">
            <ul className="UserInfor__wrapper__Menu__accountcontent__list">
              <li>
                <Link to="/user/information">
                  <ion-icon name="play-circle-outline"></ion-icon>
                  Thông tin tài khoản
                </Link>
              </li>

              <li>
                <Link to="/user/address">
                  <ion-icon name="play-circle-outline"></ion-icon>
                  Danh sách địa chỉ
                </Link>
              </li>

              <li>
                <a href="">
                  <ion-icon name="play-circle-outline"></ion-icon>
                  Đăng xuất
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="UserInfor__wrapper__Information">
          <h3>Thông tin tài khoản</h3>
          <form action="" acceptCharset="UTF-8" method="post">
            <div className="UserInfor__wrapper__Information__email">
              <label className="UserInfor__wrapper__Information__label">
                Email
              </label>
              <Input disabled />
            </div>

            <div className="UserInfor__wrapper__Information__surname">
              <label className="UserInfor__wrapper__Information__label">
                Họ và tên đệm
              </label>
              <Input />
            </div>

            <div className="UserInfor__wrapper__Information__name">
              <label className="UserInfor__wrapper__Information__label">
                Tên
              </label>
              <Input />
            </div>

            <div className="UserInfor__wrapper__Information__gender">
              <label className="UserInfor__wrapper__Information__label">
                Giới tính
              </label>
              <ul>
                <li>
                  <input
                    id="radio1"
                    type="radio"
                    value="FEMALE"
                    name="gender"
                  />
                  <label for="radio1">Nữ</label>
                </li>

                <li>
                  <input id="radio2" type="radio" value="MALE" name="gender" />
                  <label for="radio2">Nam</label>
                </li>
              </ul>
            </div>

            <div className="UserInfor__wrapper__Information__birthday">
              <label className="UserInfor__wrapper__Information__label">
                Ngày sinh
              </label>
              <Input isDate small />
            </div>

            <button className="UserInfor__wrapper__Information__confirm">
              Cập nhật
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserInfor;
