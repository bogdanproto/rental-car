import { formatWordFirstUpper } from './formatWordFirstUpper';

export const formatAddress = (str: string): string => {
  const arr = str.split(',');

  return `
  ${formatWordFirstUpper(arr[arr.length - 2].trim())} | 
  ${formatWordFirstUpper(arr[arr.length - 1].trim())}`;
};
