import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./homepopup.scss";

function HomePopUp(props) {
  const [open, setOpen] = useState(false);
  const popupRef = useRef();
  const popupListRef = useRef();

  const handleOpen = () => {
    popupRef.current.classList.toggle("open");
    popupListRef.current.classList.toggle("open");
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="home__popup" ref={popupRef}>
      <div className="home__popup-button" onClick={handleOpen}>
        {open ? (
          <ion-icon name="chevron-down-outline"></ion-icon>
        ) : (
          <ion-icon name="chevron-up-outline"></ion-icon>
        )}
      </div>
      <div className="home__popup-list" ref={popupListRef}>
        <ul>
          <li>
            <Link to="#" title="Chia sẻ lên facebook">
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
          </li>
          <li>
            <Link to="#" title="Trò chuyện qua Messenger">
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </Link>
          </li>
          <li>
            <Link to="#" title="Trò chuyện với chatbot">
              <ion-icon name="happy-outline"></ion-icon>
            </Link>
          </li>
        </ul>
      </div>
      <div className="home__popup-footer"></div>
    </div>
  );
}

export default HomePopUp;
