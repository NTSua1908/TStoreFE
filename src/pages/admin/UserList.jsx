import React, { useRef, useState } from "react";
import Navbar from "../../components/navbar_admin/Navbar";
import Siderbar from "../../components/siderbar/Siderbar";
import UserDatatable from "../../components/userdatatable/UserDatatable";
import "./userlist.scss";

const user = {
  name: "Nguyen Thien Sua",
  avatar: "https://demoda.vn/wp-content/uploads/2022/03/avatar-nam.jpg",
};

function UserList(props) {
  const containerRef = useRef();
  const sliderRef = useRef();

  const handleActiveMenu = () => {
    containerRef.current.classList.toggle("active");
    sliderRef.current.active();
    console.log("Active");
  };

  return (
    <div className="userlist">
      <Siderbar ref={sliderRef} active={2} />
      <div className="userlist__container" ref={containerRef}>
        <Navbar handleActiveMenu={handleActiveMenu} user={user} />
        <UserDatatable />
      </div>
    </div>
  );
}

export default UserList;
