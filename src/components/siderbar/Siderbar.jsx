import React, { forwardRef, useImperativeHandle, useRef, memo } from "react";
import { Link } from "react-router-dom";
import logoPNG from "../../assets/logo.png";
import "./siderbar.scss";

function Siderbar(props, ref) {
  const sliderRef = useRef();
  const logoRef = useRef();

  useImperativeHandle(ref, () => ({
    active() {
      sliderRef.current.classList.toggle("active");
      logoRef.current.classList.toggle("active");
    },
  }));

  // console.log("rerender sider");

  return (
    <div className="sidebar" ref={sliderRef}>
      <div>
        <Link className="sidebar__top" to="/" ref={logoRef}>
          <img src={logoPNG} alt="" />
          <span className="sidebar__top-logo">TStore</span>
        </Link>
      </div>
      <hr />
      <div className="sidebar__center">
        <ul>
          <Link
            to="/admin"
            style={{ textDecoration: "none" }}
            className={props.active == 1 && "active"}
          >
            <li>
              <ion-icon name="pie-chart-outline"></ion-icon>
              <span>Bảng điều khiển</span>
            </li>
          </Link>
          <Link
            to="/admin/users"
            style={{ textDecoration: "none" }}
            className={props.active == 2 && "active"}
          >
            <li>
              <ion-icon name="person-outline"></ion-icon>
              <span>Người dùng</span>
            </li>
          </Link>
          <Link
            to="/admin/products"
            style={{ textDecoration: "none" }}
            className={props.active == 3 && "active"}
          >
            <li>
              <ion-icon name="file-tray-outline"></ion-icon>
              <span>Sản phẩm</span>
            </li>
          </Link>
          <Link
            to="/admin/orders"
            style={{ textDecoration: "none" }}
            className={props.active == 4 && "active"}
          >
            <li>
              <ion-icon name="archive-outline"></ion-icon>
              <span>Đơn hàng</span>
            </li>
          </Link>

          <Link
            to="/admin/delivery"
            style={{ textDecoration: "none" }}
            className={props.active == 5 && "active"}
          >
            <li>
              <ion-icon name="bus-outline"></ion-icon>
              <span>Vận chuyển</span>
            </li>
          </Link>

          <Link to="/admin/stats" style={{ textDecoration: "none" }}>
            <li>
              <ion-icon name="bar-chart-outline"></ion-icon>
              <span>Thống kê</span>
            </li>
          </Link>
          <Link to="/admin/logout" style={{ textDecoration: "none" }}>
            <li>
              <ion-icon name="log-out-outline"></ion-icon>
              <span>Đăng xuất</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default memo(forwardRef(Siderbar));
