import React from 'react';
import './sliderItem.scss'

function SliderItem(props) {
  return (
    <div className='slider__item'>
      <img src={props.img} alt="" />
    </div>
  );
}

export default SliderItem;