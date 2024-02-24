import { verifyIsNumber } from '../number/verifyIsNumber';

export const verifyErrHF = (
  obj: { mileageFrom: any; mileageTo: any },
  setError: any
) => {
  const arrValidatedValue = verifyIsNumber(obj);

  const isErrorExist = arrValidatedValue.find(value => !value[1]);

  if (isErrorExist && !isErrorExist[1]) {
    setError(isErrorExist[0], {
      type: 'manual',
      message: 'car mileage/km must be a positive number',
    });
    return true;
  }

  if (obj?.mileageTo && Number(obj?.mileageFrom) > Number(obj?.mileageTo)) {
    setError('mileageFrom', {
      type: 'manual',
      message: 'from cannot less then toKm',
    });
    return true;
  }
};
