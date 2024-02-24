import { IAdvert } from 'interfaces/data/IData';

export const filterCollection = (adverts: IAdvert[], filter: any) =>
  adverts.filter(({ make, rentalPrice, mileage }: IAdvert) => {
    const isMakeIn = filter.make
      ? make.toLowerCase().includes(filter.make.toLowerCase())
      : true;

    const isPriceIn = filter.price
      ? Number.parseInt(rentalPrice.replace(/\D/g, '')) <= Number(filter.price)
      : true;

    const isMileageIn =
      (filter.mileageFrom ? mileage >= Number(filter.mileageFrom) : true) &&
      (filter.mileageTo ? mileage <= Number(filter.mileageTo) : true);

    return isMakeIn && isPriceIn && isMileageIn;
  });
