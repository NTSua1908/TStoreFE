import { useNavigate } from "react-router-dom";
import "./widget.scss";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Người dùng",
        isMoney: false,
        link: "/admin/users",
        icon: (
          <ion-icon
            name="person-outline"
            style={{
              color: "crimson",
            }}
          ></ion-icon>
        ),
      };
      break;
    case "order":
      data = {
        title: "Đơn hàng",
        isMoney: false,
        link: "/admin/orders",
        icon: (
          <ion-icon
            name="cart-outline"
            style={{
              color: "goldenrod",
            }}
          ></ion-icon>
        ),
      };
      break;
    case "earning":
      data = {
        title: "Tiền thu",
        isMoney: true,
        link: "/admin/stats",
        icon: (
          <ion-icon name="cash-outline" style={{ color: "green" }}></ion-icon>
        ),
      };
      break;
    case "balance":
      data = {
        title: "Lợi nhuận",
        isMoney: true,
        link: "/admin/stats",
        icon: (
          <ion-icon
            name="wallet-outline"
            style={{
              color: "purple",
            }}
          ></ion-icon>
        ),
      };
      break;
    default:
      break;
  }

  const navigate = useNavigate();

  return (
    <div
      className="widget"
      onClick={() => {
        navigate(data.link);
      }}
    >
      <div>
        <div class="widget__numbers">
          {data.isMoney && "$"} {amount}
        </div>
        <div class="widget__cardName">{data.title}</div>
      </div>
      <div class="widget__iconBox">{data.icon}</div>
    </div>
  );
};

export default Widget;
