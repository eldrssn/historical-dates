import { FC } from 'react';

import { EventsSlider } from './EventsSlider';
import { AppearanceContainer } from './AppearanceContainer';
import { IEvent } from '../../data';
import { useWindowSize } from '../../hooks/useWindowSize';
import styles from './Events.module.scss';

interface EventProps {
  events: IEvent[];
  title: string;
}

export const Events: FC<EventProps> = ({ events, title }) => {
  const { isMobile } = useWindowSize();

  return (
    <AppearanceContainer className={styles.events} dependencies={events}>
      {isMobile ? (
        <>
          <h3 className={styles.title}>{title}</h3>
          <hr className={styles.hr} />
        </>
      ) : (
        <></>
      )}
      <EventsSlider events={events} />
    </AppearanceContainer>
  );
};
