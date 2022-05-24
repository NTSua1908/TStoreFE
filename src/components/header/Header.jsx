import { useEffect, useRef, useState } from "react";
import logoPNG from "../../assets/logo.png";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import Button from "../button/Button";
import { useSelector } from "react-redux";

const headerNav = [
  {
    display: "Cửa hàng",
    path: "/",
    //icon: 'storefront-outline'
  },
  {
    display: "Khám phá",
    path: "/discover",
    //icon: 'bulb-outline'
  },
  {
    display: "Hỗ trợ",
    path: "/support",
    //icon: 'help-circle-outline'
  },
];

function Header(props) {
  const { pathname } = useLocation();

  const active = headerNav.findIndex((item) => item.path === pathname);

  const headerRef = useRef();
  const timer = useRef(null);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log(user);
    const shrink = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    };
    window.addEventListener("scroll", shrink);
    return () => {
      window.removeEventListener("scroll", shrink);
    };
  }, []);

  const handleAnimation = () => {
    clearTimeout(timer.current);
    headerRef.current.classList.remove("loading");
    headerRef.current.classList.add("loading");

    timer.current = setTimeout(() => {
      console.log("timeout");
      headerRef.current.classList.remove("loading");
    }, 1000);
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logoPNG} alt="" />
          <Link to="/" onClick={handleAnimation}>
            <span>TStore</span>
          </Link>
        </div>
        <input
          className="header__menu-toggle"
          id="header__menu-toggle"
          type="checkbox"
        />
        <label
          className="header__menu-button-container"
          htmlFor="header__menu-toggle"
        >
          <div className="header__menu-button"></div>
        </label>
        <div className="header__back"></div>
        <nav className="header__container">
          <ul className="header__nav">
            {headerNav.map((item, index) => (
              <li key={index} className="header__container__item">
                <Link
                  onClick={handleAnimation}
                  to={item.path}
                  className={`${index === active ? "active" : ""}`}
                >
                  {item.display}
                </Link>
              </li>
            ))}
            {!user && (
              <>
                <li className="header__container__item header__islogin">
                  <a>Đăng nhập</a>
                </li>
                <li className="header__container__item header__islogin">
                  <a>Đăng kí</a>
                </li>
              </>
            )}
          </ul>
          {!user.name ? (
            <div className="header__user">
              <Button className="btn">
                <Link to="/login">Đăng nhập</Link>
              </Button>
              <Button className="btn btn-login">
                <Link to="/register">Đăng ký</Link>
              </Button>
            </div>
          ) : (
            <ul className="header__user">
              <span className="username">{user.name}</span>
              <div className="avatar__container">
                <img src={user.avatar} alt="" />
              </div>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Header;
