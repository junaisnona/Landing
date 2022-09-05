import React, { Dispatch, useEffect, useState } from "react";
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
  // const [matches, setMatches] = React.useState(0);

  let matches: boolean;

  matches = true;

  type WindowDimentions = {
    width: number;
    height: number | undefined;
  };

  const useWindowDimensions = (): void => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
      width: 0,
      height: 0,
    });
    useEffect(() => {
      function handleResize(): void {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      handleResize();
      window.addEventListener("resize", handleResize);
      return (): void => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    if (windowDimensions.width < 1024) matches = false;
    else matches = true;
  };

  useWindowDimensions();

  return (
    <>
      <div className="bg-swiper-bg-color">
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
          modules={[Autoplay, Pagination]}
        >
          {matches ? (
            <>
              <SwiperSlide>
                <MainLanding />
              </SwiperSlide>
              <SwiperSlide>
                <ThreeLanding isVisible={visible} />
              </SwiperSlide>
            </>
          ) : (
            <>
              <SwiperSlide>
                <MainLanding />
              </SwiperSlide>
              <SwiperSlide>
                <One singleSwiper={true} />
              </SwiperSlide>
              <SwiperSlide>
                <Two singleSwiper={true} />
              </SwiperSlide>
              <SwiperSlide>
                <Three singleSwiper={true} />
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </div>
    </>
  );
}

export default LandingHero;
