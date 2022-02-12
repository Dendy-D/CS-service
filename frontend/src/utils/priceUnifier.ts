export const priceUnifier = (price: number): string => {
  const arr = String(price)
    .split('')
    .reverse();

  const rubles = arr.slice(0, 3)
    .reverse()
    .join('');

  const thousands = arr.slice(3, 6)
    .reverse()
    .join('');

  const millions = arr.slice(6, 9)
    .reverse()
    .join('');

  const result = `${millions} ${thousands} ${rubles}р`;

  return result;
};
