import React, { useState, useRef } from "react";
import Navbar from "../../components/navbar_admin/Navbar";
import Siderbar from "../../components/siderbar/Siderbar";
import GameDatatable from "../../components/gamedatatable/GameDatatable";
import "./gamelist.scss";

const user = {
  name: "Nguyen Thien Sua",
  avatar: "https://demoda.vn/wp-content/uploads/2022/03/avatar-nam.jpg",
};

function GameList(props) {
  const containerRef = useRef();
  const sliderRef = useRef();

  const handleActiveMenu = () => {
    containerRef.current.classList.toggle("active");
    sliderRef.current.active();
    console.log("Active");
  };

  return (
    <div className="gamelist">
      <Siderbar ref={sliderRef} active={3} />
      <div className="gamelist__container" ref={containerRef}>
        <Navbar handleActiveMenu={handleActiveMenu} user={user} />
        <GameDatatable />
      </div>
    </div>
  );
}

export default GameList;
