import { IDiscipline, disciplines } from '../data';

export const formattedNumber = (number: number) =>
  number < 10 ? number.toString().padStart(2, '0') : number.toString();

const currentCircleOffset = 360 / disciplines.length - 30;

export const getAngle = (item: IDiscipline) =>
  (360 / disciplines.length) * (disciplines.indexOf(item) + 1) -
  currentCircleOffset;

export const getStartPosition = (prevIndex: number) =>
  -(360 / disciplines.length) * prevIndex;

export const getEndPosition = (prevIndex: number, currentIndex: number) => {
  const startPosition = getStartPosition(prevIndex);
  const angleOffset = (360 / disciplines.length) * (prevIndex - currentIndex);

  // Нормализация угла в диапазоне [-180, 180]
  const normalizedOffset = ((angleOffset + 540) % 360) - 180;

  return startPosition + normalizedOffset;
};
