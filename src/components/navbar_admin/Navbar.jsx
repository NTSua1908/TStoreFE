import React, { memo } from "react";
import "./navbar.scss";

function Navbar(props) {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__toggle" onClick={props.handleActiveMenu}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className="navbar__user">
          <span className="navbar__name">{props.user.name}</span>
          <img src={props.user.avatar} alt="" className="navbar__avatar" />
        </div>
      </div>
    </div>
  );
}

export default memo(Navbar);
