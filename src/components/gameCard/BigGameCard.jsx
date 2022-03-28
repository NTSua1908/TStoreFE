import React from 'react';
import {useEffect} from 'react';
import VanillaTilt from 'vanilla-tilt'

import './bigGameCard.scss';
import Button from '../button/Button'
import { Link } from 'react-router-dom';

function BigGameCard(props) {

  const item = props.item;

  useEffect(() => {
    const card = document.querySelectorAll(".vanillaTilt");
    VanillaTilt.init(card);
    console.log(card)
  }, [])

  return (
    <Link to={`/detail/${item.id}`} className='Gamecard--big  vanillaTilt'>
        <div className='Gamecard--big__img' style={{backgroundImage:  `url(${item.img})`}}>
          <div className='Gamecard--big__img-content'>
            <div className="Gamecard--big__img-content-wrapper">
              <h3>{item.name}</h3>
              <p>Giảm giá sẽ kết thức sau <br /> {item.date}</p>
            </div>
            <div className="Gamecard--big__img-content-btn-wrapper">
              <Button className='btn btn-detail'>Xem thêm</Button>
            </div>
          </div>
        </div>
        {
          item.discount && 
          <div className='Gamecard--big__discount'>
            <span>Giảm {item.discount}</span> 
          </div>
        }
    </Link>
  );
}

export default BigGameCard;