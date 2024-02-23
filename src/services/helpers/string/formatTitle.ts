export const formatTitle = (str: string, str2: string): string =>
  str.length + str2.length <= 13 ? ` ${str2}, ` : ', ';
