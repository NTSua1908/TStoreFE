import React, { useState } from 'react';
import {useEffect} from 'react';
import VanillaTilt from 'vanilla-tilt'

import './bigGameCard.scss';
import Button from '../button/Button'
import { Link } from 'react-router-dom';

function BigGameCard(props) {

  const item = props.item;
  const [newPrice, setNewPrice] = useState(item.price)
  const [oldPrice, setOldPrice] = useState(item.price * 1)

  useEffect(() => {
    vanillaTilt()
    //console.log(newPrice, item.discount, newPrice*item.discount/100)
    const price = newPrice - newPrice*item.discount/100
    setNewPrice(price.toLocaleString('en-US'))  
    setOldPrice(oldPrice.toLocaleString('en-US'))
  }, [])

  const vanillaTilt = () => {
    const card = document.querySelectorAll(".vanillaTilt");
    VanillaTilt.init(card);
  }

  return (
    <Link to={`/detail/${item.id}`} className='Gamecard--big  vanillaTilt'>
      <div className="Gamecard--big-wrapper">
        <div className='Gamecard--big-wrapper__img' style={{backgroundImage:  `url(${item.img})`}}>
          <div className='Gamecard--big-wrapper__img-content'>
            <div className="Gamecard--big-wrapper__img-content-wrapper">
              <p className='Gamecard--big-wrapper__img-content-wrapper-new'>{newPrice}đ</p>
              {
                item.discount && (
                  <>
                  <p className='Gamecard--big-wrapper__img-content-wrapper-old'>{oldPrice}đ</p>
                  <p className='Gamecard--big-wrapper__img-content-wrapper-date'>Giảm giá sẽ kết thức sau <br /> {item.date}</p>
                </>
                )
              }
              <h3>{item.name}</h3>
            </div>
            <div className="Gamecard--big-wrapper__img-content-btn-wrapper">
              <Button className='btn btn-detail'>Xem thêm</Button>
            </div>
          </div>
        </div>
        {
          item.discount && 
          <div className='Gamecard--big-wrapper__discount'>
            <span>Giảm {item.discount}%</span> 
          </div>
        }
      </div>
    </Link>
  );
}

export default BigGameCard;