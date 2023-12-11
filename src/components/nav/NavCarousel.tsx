import { FC, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import { disciplines } from '../../data';
import { useWindowSize } from '../../hooks/useWindowSize';
import { usePreviousValue } from '../../hooks/usePreviousValue';
import { getEndPosition, getStartPosition } from '../../utils';

import { NavCirlce } from './NavCirlce';
import styles from './NavCarousel.module.scss';

interface NavCarouselProps {
  currentIndex: number;
  handleClickDiscipline: (index: number) => void;
}

export const NavCarousel: FC<NavCarouselProps> = ({
  currentIndex,
  handleClickDiscipline,
}) => {
  const wrapperRef = useRef<any>();
  const { isMobile } = useWindowSize();
  const prevIndex = usePreviousValue(currentIndex);

  useLayoutEffect(() => {
    const wrapper = gsap.context(() => {
      if (!wrapperRef.current) {
        return;
      }

      gsap.fromTo(
        wrapperRef.current,
        {
          rotation: getStartPosition(prevIndex),
        },
        {
          rotation: getEndPosition(prevIndex, currentIndex),
          duration: 1,
        }
      );
    }, wrapperRef);
  }, [currentIndex]);

  return (
    <>
      {!isMobile && (
        <div className={styles.wrapper} ref={wrapperRef}>
          {disciplines.map((discipline, index) => (
            <NavCirlce
              key={index}
              discipline={discipline}
              currentIndex={currentIndex}
              handleClickDiscipline={handleClickDiscipline}
            />
          ))}
        </div>
      )}
    </>
  );
};
