import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./sliderGameDetail.scss";

function SliderGameDetail(props) {
  const gameItems = props.items;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="SliderGameDetail">
      <div className="SliderGameDetail__slider">
        <Swiper
          className="SliderGameDetail__mainslider"
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        >
          {gameItems.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                className="SliderGameDetail__mainslider__imgGame"
                src={item.image}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          className="SliderGameDetail__thumbslider"
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          navigation={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {gameItems.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="SliderGameDetail__thumbslider__container">
                <img
                  className="SliderGameDetail__thumbslider__imgGame"
                  src={item.image}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SliderGameDetail;
