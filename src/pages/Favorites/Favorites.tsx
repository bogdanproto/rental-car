import { List, NotMatches, PageContainer, SearchForm } from 'components/common';
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
      <SearchForm setFilter={setFavoriteFilter} currentFilter={currentFilter} />

      {favFilteredAdverts.length > 0 ? (
        <List adverts={favFilteredAdverts} />
      ) : (
        favAdverts.length > 0 && <NotMatches />
      )}
    </PageContainer>
  );
};

export default Favorites;
