import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import GameCard from '../gameCard/GameCard';
import './gameList.scss'

const gameItems = [
  {
    'img' : 'https://i.pinimg.com/736x/51/40/5d/51405de7464b8ca14d0df5aa03d9953b.jpg',
    'name' : 'Far Cry 6',
    'id' : 1,
    'discount' : '40',
    'price' : '150000'
  },
  {
    'img' : 'https://i.pinimg.com/736x/57/d2/dc/57d2dc9d6e6997d2d0edf3b2a5e250e4.jpg',
    'name' : 'Liên Quân',
    'id' : 2,
    'discount' : '0',
    'price' : '150000'
  },
  {
    'img' : 'https://i.pinimg.com/474x/d0/47/6e/d0476e1ef8964bd3f35ddf1eee502667.jpg',
    'name' : 'Free Fire',
    'id' : 3,
    'discount' : '20',
    'price' : '150000'
  },
  {
    'img' : 'https://ecdn.game4v.com/g4v-content/uploads/2020/02/Elden-Ring-2.jpg',
    'name' : 'Elden Ring',
    'id' : 4,
    'discount' : '10',
    'price' : '150000'
  },
  {
    'img' : 'http://m.gettywallpapers.com/wp-content/uploads/2021/09/Valheim-Phone-Wallpaper-576x1024.png',
    'name' : 'Valheim',
    'id' : 5,
    'discount' : '90',
    'price' : '150000'
  },
  {
    'img' : 'https://uploadvr.com/wp-content/uploads/2022/03/labyrinth-dance-magic-dance-in-vr-1-scaled.jpg',
    'name' : 'Walkabout Mini Golf VR',
    'id' : 6,
    'discount' : '0',
    'price' : '150000'
  },
  {
    'img' : 'https://i.imgur.com/S4EkkyQ.png',
    'name' : 'Deep Rock Galactic',
    'id' : 7,
    'discount' : '50',
    'price' : '150000'
  },
  {
    'img' : 'https://posterspy.com/wp-content/uploads/2020/06/iceborne-poster-1500x2318.jpg',
    'name' : 'Iceborne Master Edition',
    'id' : 8,
    'discount' : '0',
    'price' : '150000'
  },
  {
    'img' : 'https://w0.peakpx.com/wallpaper/840/416/HD-wallpaper-resident-evil-8-ps4-ps5-re-residentevil-capcom-re8-positive-village.jpg',
    'name' : 'Resident Evil Village',
    'id' : 9,
    'discount' : '0',
    'price' : '150000'
  },
  {
    'img' : 'https://www.teahub.io/photos/full/259-2597237_red-dead-redemption-red-dead-redemption-2-wallpaper.jpg',
    'name' : 'Red Dead Redemption 2',
    'id' : 10,
    'discount' : '10',
    'price' : '150000'
  },
  {
    'img' : 'https://w0.peakpx.com/wallpaper/193/491/HD-wallpaper-battlefield-5-games-war.jpg',
    'name' : 'Battlefield V',
    'id' : 11,
    'discount' : '15',
    'price' : '150000'
  },
  {
    'img' : 'https://wallpapercave.com/wp/wp9868714.jpg',
    'name' : 'Battlefield™ 2042',
    'id' : 12,
    'discount' : '0',
    'price' : '150000'
  },
]

function GameList(props) {
  return (
    <div className="game__list">
        <Swiper className='game__list-container'
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={'auto'}
        >
            {
                gameItems.map((item, i) => (
                    <SwiperSlide key={i} style={{paddingTop: '10px', paddingLeft: '10px'}}>
                        <GameCard item={item}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
    
);
}

export default GameList;