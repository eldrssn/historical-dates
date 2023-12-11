import { FC, ReactNode, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import { IEvent } from '../../data';
import { useWindowSize } from '../../hooks/useWindowSize';

export interface AppearanceContainer<T> {
  children: ReactNode;
  className: string;
  dependencies: T[];
}

export const AppearanceContainer: FC<AppearanceContainer<IEvent>> = ({
  children,
  className,
  dependencies,
}) => {
  const { isMobile } = useWindowSize();
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    const ctx = gsap.context(() => {
      if (element) {
        const tl = gsap.timeline();
        tl.to(element, {
          opacity: 0,
          y: isMobile ? 15 : 0,
          duration: 0.3,
        });
        tl.to(element, {
          opacity: 1,
          y: 0,
          duration: 0.3,
        });
      }
    });
  }, [dependencies]);

  return (
    <section className={className} ref={ref}>
      {children}
    </section>
  );
};
