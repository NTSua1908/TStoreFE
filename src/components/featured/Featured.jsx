import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__top">
        <h1 className="featured__top-title">Tổng doanh thu</h1>
      </div>
      <div className="featured__bottom">
        <div className="featured__Chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="featured__title">Tổng doanh số bán hàng tháng này</p>
        <p className="featured__amount">$420</p>
        <div className="featured__summary">
          <div className="featured__item">
            <div className="featured__item-Title">Tuần trước</div>
            <div className="featured__item-Result negative">
              <ion-icon name="trending-down-outline"></ion-icon>
              <div className="featured__item-Result-Amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="featured__item-Title">Tháng trước</div>
            <div className="featured__item-Result positive">
              <ion-icon name="trending-up-outline"></ion-icon>
              <div className="featured__item-Result-Amount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
