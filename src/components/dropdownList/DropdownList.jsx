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
    // console.log("drop down");
    // console.log(listItem);
  }, [props.item]);

  const handleShow = () => {
    menuRef.current.classList.toggle("active");
  };

  const handleActive = (index) => {
    if (props.one) {
      // console.log(listItem);
      listItem.forEach((item) => {
        item.classList.remove("active");
      });
      listItem[index].classList.add("active");
      props.setSelected(props.item[index].id);
    } else {
      listItem[index].classList.toggle("active");

      const id = props.item[index].id;

      if (listItem[index].classList.contains("active")) {
        props.setSelected([...props.selected, id]);
      } else {
        var i = props.selected.indexOf(id);
        if (index > -1) {
          props.setSelected(props.selected.filter((item, index) => index != i));
        }
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
              <span> {item.name}</span>
              <ion-icon name="checkmark-outline"></ion-icon>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownList;
