import { FC, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import clsx from 'clsx';

import { IDiscipline, disciplines } from '../../data';
import { getEndPosition, getAngle, getStartPosition } from '../../utils';
import { usePreviousValue } from '../../hooks/usePreviousValue';

import styles from './NavCircle.module.scss';

type NavCirlceProp = {
  discipline: IDiscipline;
  currentIndex: number;
  handleClickDiscipline: (index: number) => void;
};

export const NavCirlce: FC<NavCirlceProp> = ({
  discipline,
  currentIndex,
  handleClickDiscipline,
}) => {
  const circleRef = useRef<any>();
  const prevIndex = usePreviousValue(currentIndex) || 0;

  useLayoutEffect(() => {
    const pointRotation = gsap.context(() => {
      if (!circleRef.current) {
        return;
      }

      gsap.fromTo(
        circleRef.current,
        {
          rotation: -(getStartPosition(prevIndex) + getAngle(discipline)),
        },
        {
          rotation: -(
            getEndPosition(prevIndex, currentIndex) + getAngle(discipline)
          ),
          duration: 1,
        }
      );
    }, circleRef);
  }, [currentIndex]);

  return (
    <div
      className={styles.wrapper}
      style={{
        transform: `rotate(${getAngle(discipline)}deg)`,
      }}
    >
      <div ref={circleRef} className={styles.circle_wrapper}>
        <div
          className={clsx(styles.circle, {
            [styles.active]: disciplines.indexOf(discipline) === currentIndex,
          })}
          onClick={() => handleClickDiscipline(disciplines.indexOf(discipline))}
        >
          <span className={styles.index}>
            {disciplines.indexOf(discipline) + 1}
          </span>
          <div className={styles.circle_title}>{discipline.title}</div>
        </div>
      </div>
    </div>
  );
};
