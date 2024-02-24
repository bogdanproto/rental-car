import {
  Card,
  List,
  NotMatches,
  PageContainer,
  SearchForm,
} from 'components/common';
import { IAdvert } from 'interfaces/data/IData';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import {
  selectAdverts,
  selectFilterFavorite,
  selectFilteredFav,
} from 'services/redux/selectors';
import { setFavoriteFilter } from 'services/redux/slice/dataSlice';

const Favorites = () => {
  const favAdverts = useTypeSelector(selectAdverts);
  const favFilteredAdverts = useTypeSelector(selectFilteredFav);
  const currentFilter = useTypeSelector(selectFilterFavorite);

  return (
    <PageContainer>
      <SearchForm setFilter={setFavoriteFilter} startFilter={currentFilter} />
      <List>
        {favFilteredAdverts.length > 0
          ? favAdverts.map((advert: IAdvert) => (
              <Card key={advert.id} advert={advert} />
            ))
          : favAdverts.length > 0 && <NotMatches />}
      </List>
    </PageContainer>
  );
};

export default Favorites;
