export const transformArrstoStr = (separate: string, ...arrs: any): string => {
  const str = arrs.flat().join(separate);
  return str.slice(0, str.length);
};
