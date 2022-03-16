import React from 'react';
import { Link } from 'react-router-dom';
import './gameCard.scss'

function GameCard(props) {

  const item = props.item

  return (
    <Link to={`/detail/${item.id}`} className='Gamecard'>
        <div className='Gamecard__img' style={{backgroundImage:  `url(${item.img})`}}>
          <dir className='Gamecard__img-wishlist' title="Thêm vào danh sách yêu thích">
            <ion-icon name="add-circle-outline"></ion-icon>
          </dir>
        </div>
        <h3>{item.name}</h3>
    </Link>
  );
}

export default GameCard;