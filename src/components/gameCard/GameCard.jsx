
import { Link } from 'react-router-dom';
import './gameCard.scss'


function GameCard(props) {

  const item = props.item


  return (
    <Link to={`/detail/${item.id}`} className='Gamecard'>
        <div className='Gamecard__img' style={{backgroundImage:  `url(${item.img})`}}>
          <div className='Gamecard__img-wishlist' title="Thêm vào danh sách yêu thích">
            <ion-icon name="add-circle-outline"></ion-icon>
          </div>
        </div>
        {
          item.discount && 
          <div className='Gamecard__discount'>
            <span>Giảm {item.discount}</span> 
          </div>
        }
        <h3>{item.name}</h3>
    </Link>
  );
}

export default GameCard;