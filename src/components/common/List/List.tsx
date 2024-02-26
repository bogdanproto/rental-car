import { ListStyled } from './List.styled';
import { IAdvert } from 'interfaces/data/IData';
import { Card } from '../Card/Card';

interface ListProps {
  adverts: IAdvert[];
}

export const List: React.FC<ListProps> = ({ adverts }) => {
  return (
    <>
      <ListStyled>
        {adverts.length > 0 &&
          adverts.map((advert: IAdvert) => (
            <Card key={advert.id} advert={advert} />
          ))}
      </ListStyled>
    </>
  );
};
