import { useState } from 'react';

import { IDiscipline, disciplines } from '../../data';
import { NavButtons } from '../nav/NavButtons';
import { Date } from '../ui/Date';
import { Events } from '../events/Events';
import styles from './Main.module.scss';

export const Main = () => {
  const [discipline, setDiscipline] = useState<IDiscipline>(disciplines[0]);
  const { dateStart, dateEnd, title, events } = discipline;

  return (
    <main className={styles.main}>
      <h2 className={styles.header}>
        Исторические
        <br /> даты
      </h2>

      <div className={styles.dates}>
        <Date date={dateStart} />
        <Date date={dateEnd} />
      </div>

      <NavButtons discipline={discipline} setDiscipline={setDiscipline} />
      <Events events={events} title={title} />
    </main>
  );
};
