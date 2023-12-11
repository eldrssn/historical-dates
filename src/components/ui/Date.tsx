import gsap from 'gsap';
import { FC, useLayoutEffect, useRef, useState } from 'react';
import styles from './Date.module.scss';

interface DateProps {
  date: number;
}

export const Date: FC<DateProps> = ({ date }) => {
  const [currDate, setCurrDate] = useState(date);
  const ref = useRef(null);

  useLayoutEffect(() => {
    gsap.to(ref.current, {
      innerText: date,
      duration: 1,
      snap: {
        innerText: 1,
      },
      stagger: 1,
      onUpdate() {
        setCurrDate(date);
      },
    });
  }, [date]);

  return (
    <p className={styles.date} ref={ref}>
      {currDate}
    </p>
  );
};
