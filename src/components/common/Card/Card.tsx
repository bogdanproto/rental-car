import { IAdvert } from 'interfaces/data/IData';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import {
  ButtonBox,
  CardContainer,
  SubtitleCard,
  TitleCard,
} from './Card.styled';
import { Button } from '../Button/Button.styled';
import {
  formatAddress,
  formatTitle,
  formatWordFirstUpper,
  getClassCar,
  useModal,
} from 'services/helpers';
import { IconBtn } from '../IconBtn/IconBtn.styled';
import { ModalWindow } from '../Modal/Modal';
import { CardDetail } from '../CardDetail/CardDetail';

import { toggelFavorite } from 'services/redux/slice/dataSlice';
import { selectFavIds } from 'services/redux/selectors';

interface CardProps {
  advert: IAdvert;
}

export const Card: React.FC<CardProps> = ({ advert }) => {
  const dispatch = useTypeDispatch();
  const { isOpen, toggle } = useModal();

  const isActive = useTypeSelector(state =>
    selectFavIds(state).includes(advert.id)
  );

  const handleClickFavorite = (id: number) => {
    dispatch(toggelFavorite(id));
  };

  return (
    <>
      <CardContainer>
        <IconBtn onClick={() => handleClickFavorite(advert.id)} type="button">
          {isActive ? <IoMdHeart color="#3470FF" /> : <IoMdHeartEmpty />}
        </IconBtn>

        <img src={advert.img} alt={advert.make} />

        <div>
          <TitleCard>
            <h3>
              {advert.make}
              <span>{formatTitle(advert.make, advert.model)}</span>
              {advert.year}
            </h3>
            <h3>{advert.rentalPrice}</h3>
          </TitleCard>
          <SubtitleCard>
            <p>
              {`${formatAddress(advert.address)} |  
         ${advert.rentalCompany} | 
         ${getClassCar(advert.rentalPrice)} 
         ${formatWordFirstUpper(advert.type)} |  
         ${formatWordFirstUpper(advert.model)} | 
         ${advert.id} | 
         ${advert.functionalities[0]}`}
            </p>
          </SubtitleCard>
        </div>

        <ButtonBox>
          <Button type="button" onClick={toggle}>
            Learn more
          </Button>
        </ButtonBox>
      </CardContainer>
      <ModalWindow isOpen={isOpen} onClose={toggle}>
        <CardDetail advert={advert} />
      </ModalWindow>
    </>
  );
};
