import { useEffect } from 'react';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllAdverts } from 'services/redux/operations/getAllAdverts';
import {
  selectAdverts,
  selectFilterCatalog,
  selectFilteredAdverts,
  selectIsAdvertsExist,
  selectIsFilterEmpty,
  selectParams,
} from 'services/redux/selectors';
import { List, NotMatches, PageContainer, SearchForm } from 'components/common';
import { BtnLink } from 'components/common/BtnLink/BtnLink.styled';
import { setCatalogFilter } from 'services/redux/slice/dataSlice';

const Catalog = () => {
  const dispatch = useTypeDispatch();

  const selectedAdverts = useTypeSelector(selectFilteredAdverts);
  const adverts = useTypeSelector(selectAdverts);
  const currentFilter = useTypeSelector(selectFilterCatalog);
  const { page, limit } = useTypeSelector(selectParams);
  const isAdvertsExist = useTypeSelector(selectIsAdvertsExist);
  const isFilterEmpty = useTypeSelector(selectIsFilterEmpty);

  useEffect(() => {
    if (adverts.length) {
      return;
    }

    dispatch(getAllAdverts({ page: 1, limit: 12 }));
  }, [adverts.length, dispatch]);

  const handleClick = () => {
    dispatch(getAllAdverts({ page: Number(page) + 1, limit }));
  };

  return (
    <PageContainer>
      <SearchForm setFilter={setCatalogFilter} currentFilter={currentFilter} />

      {selectedAdverts.length > 0 ? (
        <List adverts={selectedAdverts} />
      ) : (
        adverts.length > 0 && <NotMatches />
      )}

      {adverts.length > 0 && isAdvertsExist && isFilterEmpty && (
        <BtnLink type="button" onClick={handleClick}>
          Load more
        </BtnLink>
      )}
    </PageContainer>
  );
};

export default Catalog;
