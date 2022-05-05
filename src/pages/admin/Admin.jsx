import React, { useRef } from "react";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar_admin/Navbar";
import Siderbar from "../../components/siderbar/Siderbar";
import Widget from "../../components/widget/Widget";
import "./admin.scss";

const user = {
  name: "Nguyen Thien Sua",
  avatar: "https://demoda.vn/wp-content/uploads/2022/03/avatar-nam.jpg",
};

function Admin(props) {
  const containerRef = useRef();
  const sliderRef = useRef();

  const handleActiveMenu = () => {
    containerRef.current.classList.toggle("active");
    sliderRef.current.active();
    console.log("Active");
  };

  return (
    <div className="admin">
      <Siderbar ref={sliderRef} active={1} />
      <div className="admin__container" ref={containerRef}>
        <Navbar handleActiveMenu={handleActiveMenu} user={user} />
        <div className="admin__widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="admin__charts">
          <Featured />
          <Chart title="Doanh thu 6 tháng gần đây" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
}

export default Admin;
