import React from 'react';
import { Link } from 'react-router-dom';
import GameGrid from '../components/gameGrid/GameGrid';
import GameList from '../components/gameList/GameList';
import Logo3D from '../components/logo3D/Logo3D';
import Search from '../components/search/Search';
import Slider from '../components/slider/Slider';
import SliderNewGame from '../components/slider/SliderNewGame/SliderNewGame';
import Footer from '../components/footer/Footer';
import './home.scss'

function Home(props) {
  return (
    <div className='home'>
      <Slider/>
      <div className="home__wrapper">
        <Search />
        <Link className='home__title' to="/popular">
          <span>
            Top game thịnh hành
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </Link>
        <GameList />
        <Logo3D />
        <Link className='home__title' to="/discount">
          <span>
            Top game giảm giá
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </Link>
        <GameGrid/>
        <Link className='home__title' to="/discount">
          <span>
            Game mới cập nhật
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </Link>
        <SliderNewGame />
        
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;