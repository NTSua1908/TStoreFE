// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderItem from './SliderItem';
import Modal from '../modal/Modal';
import ModalItemTrailer from '../modal/ModalItemTrailer';

SwiperCore.use([Navigation, Pagination, Autoplay])

const gameItems = [
  {
    'img' : 'https://images4.alphacoders.com/115/thumb-1920-1151249.jpg',
    'trailer' : 'https://www.youtube.com/embed/OT8if6DXOFQ'
  },
  {
    'img' : 'https://www.psu.com/wp/wp-content/uploads/2020/10/Far-Cry-6-PS5-Wallpapers-03-1.jpg',
    'trailer' : 'https://www.youtube.com/embed/-IJuKT1mHO8'
  },
  {
    'img' : 'https://bloganchoi.com/wp-content/uploads/2021/04/game-viet-nam-2-1.jpg',
    'trailer' : 'https://www.youtube.com/embed/pKUu6PKNyzk'
  },
  {
    'img' : 'https://media.urbanistnetwork.com/saigoneer/article-images/2021/09/27/hoa-the-game/hoa-top0b.jpg',
    'trailer' : 'https://www.youtube.com/embed/MlBjHUdgaZw'
  },
  {
    'img' : 'https://haycafe.vn/wp-content/uploads/2021/12/Hinh-nen-hinh-anh-Lien-Quan.jpg',
    'trailer' : 'https://www.youtube.com/embed/2GpYwOEGKXg'
  }
]

export default () => {

  

  return ( <>
    <Swiper
      // install Swiper modules
      //modules={[Autoplay]}
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      // coverflowEffect={{
      //   rotate : 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: true
      // }}
      //autoplay={{delay: 4000}}
    >
      {
        gameItems.map((item, index) => (
          <SwiperSlide key={index}>
            {({isActive }) => (
                <SliderItem img={item.img} index={index} src={item.trailer}
                className={`${isActive ? 'active' : ''}`} 
                />
            )}
         </SwiperSlide>
        )
      )
    }
    </Swiper> 
      {
        gameItems.map((item, index) => (
          <Modal id={`modal__${index}`}>
            <ModalItemTrailer modal={`modal__${index}`} src={item.trailer}/>
          </Modal>
        ))
      }
    </>
  );
};