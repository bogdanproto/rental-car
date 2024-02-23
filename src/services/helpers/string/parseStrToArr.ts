export const parseStrToArr = (str: string, separate: string) => {
  return [...str.split(separate)];
};
