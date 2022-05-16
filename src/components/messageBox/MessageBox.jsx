import React, { forwardRef, useImperativeHandle, useRef } from "react";
import "./messagebox.scss";

function MessageBox(props, ref) {
  const message = props.item;

  const messageBoxRef = useRef();

  useImperativeHandle(ref, () => ({
    active() {
      messageBoxRef.current.classList.add("active");
    },
    deactivate() {
      messageBoxRef.current.classList.remove("active");
    },
  }));

  return (
    <div className="messagebox" ref={messageBoxRef}>
      <div className="messagebox__container">
        <div className={`messagebox__icon ${message.type}`}>
          {message.type === "ok" && (
            <ion-icon name="checkmark-circle-outline"></ion-icon>
          )}
          {message.type === "yesno" && (
            <ion-icon name="help-circle-outline"></ion-icon>
          )}
          {message.type === "error" && (
            <ion-icon name="alert-circle-outline"></ion-icon>
          )}
        </div>
        <div className="messagebox__info">
          <div className="messagebox__info-title">{message.title}</div>
          <div className="messagebox__info-content">{message.content}</div>
          <div
            className={`messagebox__button ${
              (message.type === "ok" || message.type === "error") && "ok"
            }`}
          >
            {message.type === "yesno" && (
              <>
                <button
                  className="messagebox__button yes"
                  onClick={() => {
                    message.yes();
                    messageBoxRef.current.classList.remove("active");
                  }}
                >
                  Yes
                </button>
                <button
                  className="messagebox__button no"
                  onClick={() => {
                    messageBoxRef.current.classList.remove("active");
                  }}
                >
                  No
                </button>
              </>
            )}
            {(message.type === "ok" || message.type === "error") && (
              <button
                className="messagebox__button ok"
                onClick={() => {
                  messageBoxRef.current.classList.remove("active");
                }}
              >
                OK
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(MessageBox);
