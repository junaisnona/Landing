import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import MainLanding from "./MainLanding";
import ThreeLanding from "./ThreeLanding";
import One from "./One";
import Two from "./Two";
import Three from "./Three";

function LandingHero() {
  const [visible, setVisible] = React.useState(false);
  let matches = true;
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop
        onSlideChange={(a) => {
          if (a.activeIndex === 2) setVisible(true);
          else setVisible(false);
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // onSwiper={(swiper) => {

        // }}
        modules={[Autoplay, Pagination]}
        className="row"
      >
        <SwiperSlide>
          <MainLanding />
        </SwiperSlide>
        {matches ? (
          <SwiperSlide>
            <ThreeLanding isVisible={visible} />
          </SwiperSlide>
        ) : (
          <>
            <SwiperSlide>
              <One isVisible={visible} />
            </SwiperSlide>
            <SwiperSlide>
              <Two isVisible={visible} />
            </SwiperSlide>
            <SwiperSlide>
              <Three isVisible={visible} />
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </div>
  );
}

export default LandingHero;
