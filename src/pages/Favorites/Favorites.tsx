import { Card, List, PageContainer, SearchForm } from 'components/common';
import { IAdvert } from 'interfaces/data/IData';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectFavorites } from 'services/redux/selectors';

const Favorites = () => {
  const favAdverts = useTypeSelector(selectFavorites);

  return (
    <PageContainer>
      <SearchForm />
      <List>
        {favAdverts.length > 0 &&
          favAdverts.map((advert: IAdvert) => (
            <Card key={advert.id} advert={advert} />
          ))}
      </List>
    </PageContainer>
  );
};

export default Favorites;
