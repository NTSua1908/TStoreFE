import React from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../components/gameCard/GameCard';
import GameList from '../components/gameList/GameList';
import Search from '../components/search/Search';
import Slider from '../components/slider/Slider';
import './home.scss'

function Home(props) {
  return (
    <div className='home'>
      <Slider/>
      <Search />
      <Link className='home__title' to="/popular">
        <span>
          Top game thịnh hành
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </span>
      </Link>
      <GameList />
    </div>
  );
}

export default Home;