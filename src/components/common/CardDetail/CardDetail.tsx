import { IAdvert } from 'interfaces/data/IData';
import React from 'react';
import { SubtitleCard, TitleCard } from '../Card/Card.styled';
import {
  createTextBox,
  formatAddress,
  formatTitle,
  formatWordFirstUpper,
  parseStrToArr,
  transformArrstoStr,
} from 'services/helpers';
import {
  CardDetailContainer,
  SubTitleTextBox,
  SubtitleCardDetail,
  TextBlock,
  TextBox,
} from './CardDetail.styled';
import { LinkBtn } from '../LinkBtn/LinkBtn.styled';

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
    rentalConditions,
    type,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    mileage,
  },
}) => {
  return (
    <CardDetailContainer>
      <img src={img} alt={make} />

      <TextBlock>
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
          Type: ${formatWordFirstUpper(type)} |
          Fuel Consumption: ${fuelConsumption} |
          Engine Size: ${engineSize}`}
          </p>
        </SubtitleCardDetail>

        <h4>{description}</h4>
      </TextBlock>

      <TextBlock>
        <h4>Accessories and functionalities:</h4>
        <SubtitleCard>
          <p>{transformArrstoStr(' | ', accessories, functionalities)}</p>
        </SubtitleCard>
      </TextBlock>

      <TextBlock>
        <h4>Rental Conditions:</h4>
        <SubTitleTextBox>
          {rentalConditions.length > 0 &&
            parseStrToArr(rentalConditions, '\n').map(item => (
              <TextBox key={item}>{createTextBox(item)}</TextBox>
            ))}

          <TextBox>
            <p>
              Mileage: <span>{mileage.toLocaleString()}</span>
            </p>
          </TextBox>

          <TextBox>
            <p>
              Price: <span>{`${rentalPrice.replace('$', '')}$`}</span>
            </p>
          </TextBox>
        </SubTitleTextBox>
      </TextBlock>

      <LinkBtn href="tel:+380730000000">Rental car</LinkBtn>
    </CardDetailContainer>
  );
};
