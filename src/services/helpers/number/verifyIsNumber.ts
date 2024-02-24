export const verifyIsNumber = (objValues: object) =>
  Object.entries(objValues).map((value: any) => {
    const number = Number(value[1]);
    const isPositiveIntegr = Number.isInteger(number) && number >= 0;

    return [value[0], isPositiveIntegr];
  });
