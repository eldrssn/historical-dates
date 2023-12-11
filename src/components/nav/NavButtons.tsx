import { FC } from 'react';
import { clsx } from 'clsx';

import { IDiscipline, disciplines } from '../../data';
import { formattedNumber } from '../../utils';
import { useWindowSize } from '../../hooks/useWindowSize';
import { NavCarousel } from './NavCarousel';
import styles from './NavButtons.module.scss';

interface NavButtonsProps {
  discipline: IDiscipline;
  setDiscipline: React.Dispatch<React.SetStateAction<IDiscipline>>;
}

export const NavButtons: FC<NavButtonsProps> = ({
  discipline,
  setDiscipline,
}) => {
  const { isMobile } = useWindowSize();
  const currentIndex = disciplines.indexOf(discipline);
  const lastIndex = disciplines.length;

  const handleMove = (step: number) => () => {
    const newDisciplineIndex = () => {
      if (disciplines.indexOf(discipline) + step === disciplines.length) {
        return 0;
      }

      if (disciplines.indexOf(discipline) + step < 0) {
        return disciplines.length - 1;
      }

      return disciplines.indexOf(discipline) + step;
    };

    setDiscipline(disciplines[newDisciplineIndex()]);
  };

  const handleClickDiscipline = (i: number) => {
    setDiscipline(disciplines[i]);
  };

  return (
    <>
      <div className={styles.button_box}>
        <div>
          {formattedNumber(currentIndex + 1)}/{formattedNumber(lastIndex)}
        </div>

        <div className={styles.buttons}>
          <button onClick={handleMove(-1)} className={styles.arrow}></button>
          <button
            onClick={handleMove(1)}
            className={clsx(styles.arrow, styles.next)}
          ></button>
        </div>
      </div>

      {isMobile ? (
        <div className={styles.pagination}>
          {disciplines.map((_, i) => (
            <button
              key={i}
              onClick={() => handleClickDiscipline(i)}
              className={clsx(styles.bullet, {
                [styles.active]: currentIndex === i,
              })}
              id={i.toString()}
            ></button>
          ))}
        </div>
      ) : (
        <NavCarousel
          currentIndex={currentIndex}
          handleClickDiscipline={handleClickDiscipline}
        />
      )}
    </>
  );
};
