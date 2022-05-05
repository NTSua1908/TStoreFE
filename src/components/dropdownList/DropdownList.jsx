import React, { useEffect, useRef } from "react";
import "./dropdownlist.scss";

function DropdownList(props) {
  const menuRef = useRef();

  var listItem;
  useEffect(() => {
    listItem = document.querySelectorAll(
      ".dropdownlist__list .dropdownlist__list-item" + props.name
    );
    // console.log(listItem);
  }, []);

  const handleShow = () => {
    menuRef.current.classList.toggle("active");
  };

  const handleActive = (index) => {
    // console.log(listItem[index], index);
    listItem[index].classList.toggle("active");
  };

  return (
    <div className="dropdownlist">
      <div className="dropdownlist__title" onClick={handleShow} ref={menuRef}>
        <span> {props.title}</span>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
      <div className="dropdownlist__list">
        <ul>
          {props.item.map((item, index) => (
            <li
              className={`dropdownlist__list-item ${
                "dropdownlist__list-item" + props.name
              }`}
              key={index}
              onClick={() => {
                handleActive(index);
              }}
            >
              <span> {item}</span>
              <ion-icon name="checkmark-outline"></ion-icon>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownList;
