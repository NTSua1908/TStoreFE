import React, { useEffect } from 'react';
import Button from '../button/Button';
import './sliderItem.scss'

function SliderItem(props) {

  const handleTrailer = () => {
    const modal = document.querySelector(`#modal__${props.index}`)
    modal.classList.add('active')
    modal.querySelector('.modal__item-trailer > iframe').setAttribute('src', props.src)
  }

  return (
    <div className={`slider__item ${props.className}`} style={{backgroundImage: `url(${props.img})`}}>
      <div className='slider__item-overlay' 
        //}   
      />
      <div className="slider__item-container">
        <div className='slider__item-thumbnail'>
            <img className='slider__item-thumbnail-img' src={props.img} alt="" />
            <div className="slider__item-btn-view">
              <Button  className="btn btn-detail">Chi tiết</Button>
              <Button onClick={handleTrailer} className="btn btn-trailer">Trailer</Button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SliderItem;