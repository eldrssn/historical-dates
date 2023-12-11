import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import { IEvent } from '../../data';
import { Event } from '../ui/Event';
import { SwiperContainer } from './SwiperContainer';
import styles from './EventsSlider.module.scss';

interface EventsSliderProps {
  events: IEvent[];
}

export const EventsSlider: FC<EventsSliderProps> = ({ events }) => {
  return (
    <SwiperContainer>
      {events.map((event) => (
        <SwiperSlide className={styles.swiper_slide} key={event.id}>
          {({ isActive }) => <Event event={event} isActive={isActive} />}
        </SwiperSlide>
      ))}
    </SwiperContainer>
  );
};
