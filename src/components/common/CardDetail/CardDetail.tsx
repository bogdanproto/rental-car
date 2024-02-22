import { IAdvert } from 'interfaces/data/IData';
import React from 'react';
import { TitleCard } from '../Card/Card.styled';
import { formatAddress, formatTitle } from 'services/helpers';
import { CardDetailContainer, SubtitleCardDetail } from './CardDetail.styled';

interface CardDetailProps {
  advert: IAdvert;
}

export const CardDetail: React.FC<CardDetailProps> = ({
  advert: {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
  },
}) => {
  return (
    <CardDetailContainer>
      <img src={img} alt={make} />

      <TitleCard>
        <h3>
          {make}
          <span>{formatTitle(make, model)}</span>
          {year}
        </h3>
      </TitleCard>
      <SubtitleCardDetail>
        <p>
          {`${formatAddress(address)} |  
          id: ${id} |
          Year: ${year} | 
          Type: ${type} |
          Fuel Consumption: ${fuelConsumption} |
          Engine Size: ${engineSize}`}
        </p>
      </SubtitleCardDetail>
      <div>
        <h4>{description}</h4>
      </div>
      <div>
        <h4>Accessories and functionalities:</h4>
        <SubtitleCardDetail>
          <p>
            {`${formatAddress(address)} |  
          id: ${id} |
          Year: ${year} | 
          Type: ${type} |
          Fuel Consumption: ${fuelConsumption} |
          Engine Size: ${engineSize}`}
          </p>
        </SubtitleCardDetail>
      </div>
    </CardDetailContainer>
  );
};
