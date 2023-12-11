import { FC } from 'react';
import { clsx } from 'clsx';

import { IEvent } from '../../data';
import styles from './Event.module.scss';

interface EventProps {
  event: IEvent;
  isActive: boolean;
}

export const Event: FC<EventProps> = ({ event, isActive }) => (
  <article
    className={clsx(styles.event, {
      [styles.event_not_active]: !isActive,
    })}
  >
    <p className={styles.event_title}>{event.date}</p>
    <p className={styles.event_description}>{event.description}</p>
  </article>
);
