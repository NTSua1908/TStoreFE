import React, { useEffect, useRef, useState } from "react";
import "./dropdownlist.scss";

function DropdownList(props) {
  const menuRef = useRef();

  const [listItem, setListItem] = useState();
  useEffect(() => {
    var list = document.querySelectorAll(
      ".dropdownlist__list .dropdownlist__list-item" + props.name
    );
    setListItem(list);
    // console.log(listItem);
  }, []);

  const handleShow = () => {
    menuRef.current.classList.toggle("active");
  };

  const handleActive = (index) => {
    // console.log(props.item[index]);
    listItem[index].classList.toggle("active");

    if (listItem[index].classList.contains("active")) {
      props.setSelected([...props.selected, props.item[index]]);
    } else {
      var i = props.selected.indexOf(props.item[index]);
      if (index > -1) {
        props.setSelected(props.selected.filter((item, index) => index != i));
      }
    }
  };

  return (
    <div className={`dropdownlist ${props.inWhite && "white"}`}>
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
