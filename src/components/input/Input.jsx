import React, { memo, useEffect, useRef, useState } from "react";
import "./input.scss";

function Input(props) {
  const [isShow, setShow] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (props.disabled) inputRef.current.disabled = true;
  }, []);

  const isEmail = (value) => {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(value);
  };
  const isPhoneNumber = (value) => {
    var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regex.test(value);
  };

  // console.log("rerender");

  const handleInput = (e) => {
    if (!props.filled) return;
    e.target.parentElement.classList.remove("empty");

    var isInvalid = false;
    const value = e.target.value;

    if (props.required && value.trim() === "") isInvalid = true;
    else if (props.isPassword && value.length < 6) isInvalid = true;
    else if (props.isEmail && !isEmail(value)) isInvalid = true;
    else if (props.isPhone && !isPhoneNumber(value)) isInvalid = true;
    else if (props.isConfirmPassword && value != props.compareValue)
      isInvalid = true;

    let fill = [...props.filled];
    fill[props.index] = !isInvalid;
    if (props.isPassword && props.compareValue)
      fill[props.index + 1] = props.compareValue == value;
    props.setFilled(fill);
    // console.log("value = ", value);
    // console.log("change ", isInvalid);
    // console.log(props.isPhone && isInvalid);
  };

  const handleShow = () => {
    setShow(!isShow);
    isShow
      ? (inputRef.current.type = "password")
      : (inputRef.current.type = "text");
  };

  useEffect(() => {
    if (props.isPassword) inputRef.current.type = "password";
    else if (props.isConfirmPassword) inputRef.current.type = "password";
    else if (props.isEmail) inputRef.current.type = "email";
    else if (props.isNumber) inputRef.current.type = "number";
    else if (props.isPhone) inputRef.current.type = "tel";
    else if (props.isDate) inputRef.current.type = "date";
    // console.log(inputRef.current.type);
  }, []);

  return (
    <div
      className={`input ${props.inWhite && "white"} ${props.small && "small"} ${
        props.disabled && "disabled"
      } `}
    >
      <input
        ref={inputRef}
        type="text"
        // value={props.value}
        placeholder=" "
        onChange={(e) => {
          props.filled && props.onChange(e.target.value);
        }}
        onInput={(e) => {
          handleInput(e);
        }}
        onFocus={(e) => handleInput(e)}
        onBlur={(e) => {
          !props.filled && props.onChange(e.target.value);
          // console.log(props.value);
          if (!props.filled) return;

          var isInvalid = false;
          const value = e.target.value;

          if (props.required && value.trim() === "") isInvalid = true;
          else if (props.isPassword && value.length < 6) isInvalid = true;
          else if (props.isEmail && !isEmail(value)) isInvalid = true;
          else if (props.isPhone && !isPhoneNumber(value)) isInvalid = true;
          else if (props.isConfirmPassword && value != props.compareValue)
            isInvalid = true;

          isInvalid
            ? e.target.parentElement.classList.add("empty")
            : e.target.parentElement.classList.remove("empty");
          // console.log("blur ", !isInvalid);
        }}
      />
      <label for="name">
        {props.placeholder}
        {props.required && " *"}
      </label>
      <div
        className={`input__eye ${
          !(props.isPassword || props.isConfirmPassword) && "hidden"
        }`}
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

export const log1 = "hello1";
export const log2 = "hello2";
export const log3 = "hello3";

export default memo(Input);
