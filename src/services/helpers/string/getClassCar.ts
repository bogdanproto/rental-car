export const getClassCar = (str: string): string => {
  const price = parseFloat(str.replace('$', ''));

  return price >= 30 ? 'Premium' : '';
};
