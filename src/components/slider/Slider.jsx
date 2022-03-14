// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LogoPNG from '../../assets/logo.png'
import SliderItem from './SliderItem';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{delay: 3000}}
    >
      <SwiperSlide>
        <SliderItem img='https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/review/game/game-valheim-pc-the-loai-sinh-ton-hoang-da.jpg'></SliderItem>
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem img='https://www.vitinhttc.com/wp-content/uploads/2019/09/game-FPS-la-gi2.jpg'></SliderItem>
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem img='https://bloganchoi.com/wp-content/uploads/2021/04/game-viet-nam-2-1.jpg'></SliderItem>
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem img='https://i.ytimg.com/vi/4BZ5SLqQOGE/maxresdefault.jpg'></SliderItem>
      </SwiperSlide>
    </Swiper>
  );
};