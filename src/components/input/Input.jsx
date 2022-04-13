import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./input.scss";

function Input(props) {
  const [isShow, setShow] = useState(false);

  const passwordRef = useRef();

  const isEmail = (value) => {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !regex.test(value);
  };

  const handleShow = () => {
    setShow(!isShow);
    isShow
      ? (passwordRef.current.type = "password")
      : (passwordRef.current.type = "text");
  };

  useEffect(() => {
    if (props.isPassword) passwordRef.current.type = "password";
  }, []);

  return (
    <div className="input">
      <input
        ref={passwordRef}
        type="text"
        value={props.value}
        placeholder=" "
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
        onInput={(e) => {
          e.target.parentElement.classList.remove("empty");

          var isInvalid = false;
          const value = e.target.value;

          if (props.required && value.trim() === "") isInvalid = true;
          else if (props.isPassword && value.length < 6) isInvalid = true;
          else if (props.isEmail && isEmail(value)) isInvalid = true;

          let fill = [...props.filled];
          fill[props.index] = !isInvalid;
          props.setFilled(fill);
        }}
        onBlur={(e) => {
          var isInvalid = false;
          const value = e.target.value;

          if (props.required && value.trim() === "") isInvalid = true;
          else if (props.isPassword && value.length < 6) isInvalid = true;
          else if (props.isEmail && isEmail(value)) isInvalid = true;

          isInvalid
            ? e.target.parentElement.classList.add("empty")
            : e.target.parentElement.classList.remove("empty");
          // console.log(!isInvalid);
        }}
      />
      <label>
        {props.placeholder}
        {props.required && " *"}
      </label>
      <div
        className={`input__eye ${!props.isPassword && "hidden"}`}
        onClick={handleShow}
      >
        {isShow ? (
          <ion-icon name="eye-outline"></ion-icon>
        ) : (
          <ion-icon name="eye-off-outline"></ion-icon>
        )}
      </div>
    </div>
  );
}

export default Input;
