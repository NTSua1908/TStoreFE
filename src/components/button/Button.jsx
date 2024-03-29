import React from 'react';
import './button.scss'

function Button(props) {
  return (
    <button className={props.className} 
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
}

export default Button;