import { FC, ReactNode, useRef, useState } from 'react';
import clsx from 'clsx';
import { Swiper as SwiperType } from 'swiper';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

import { useWindowSize } from '../../hooks/useWindowSize';
import styles from './SwiperContainer.module.scss';

export interface SwiperContainer {
  children: ReactNode;
}

export const SwiperContainer: FC<SwiperContainer> = ({ children }) => {
  const { isMobile } = useWindowSize();
  const swiperRef = useRef<SwiperType>();

  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const handleSlideChange = () => {
    setIsLastSlide(!!swiperRef.current?.isEnd);
    setIsFirstSlide(swiperRef.current?.activeIndex === 0);
  };

  return (
    <div className={styles.swiper_container}>
      <Swiper
        modules={isMobile ? [Navigation] : undefined}
        spaceBetween={80}
        slidesPerView={'auto'}
        className={styles.swiper}
        onBeforeInit={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        onSlideChangeTransitionEnd={handleSlideChange}
      >
        {children}
      </Swiper>

      {isFirstSlide ? (
        <></>
      ) : (
        <button
          className={styles.button}
          onClick={() => swiperRef.current?.slidePrev()}
        ></button>
      )}

      {isLastSlide ? (
        <></>
      ) : (
        <button
          className={clsx(styles.button, styles.next)}
          onClick={() => swiperRef.current?.slideNext()}
        ></button>
      )}
    </div>
  );
};
