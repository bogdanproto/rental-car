import { useEffect } from 'react';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllAdverts } from 'services/redux/operations/getAllAdverts';
import {
  selectAdverts,
  selectIsAdvertsExist,
  selectParams,
} from 'services/redux/selectors';
import { Card, List, PageContainer, SearchForm } from 'components/common';
import { BtnLink } from 'components/common/BtnLink/BtnLink.styled';
import { IAdvert } from 'interfaces/data/IData';

export const Catalog = () => {
  const dispatch = useTypeDispatch();
  const adverts = useTypeSelector(selectAdverts);
  const { page, limit } = useTypeSelector(selectParams);
  const isAdvertsExist = useTypeSelector(selectIsAdvertsExist);

  console.log(isAdvertsExist);

  useEffect(() => {
    if (adverts.length) {
      return;
    }
    dispatch(getAllAdverts({ page: 1, limit }));
  }, [adverts.length, dispatch]);

  const handleClick = () => {
    dispatch(getAllAdverts({ page: Number(page) + 1, limit }));
  };

  return (
    <PageContainer>
      <SearchForm />
      <List>
        {adverts.length > 0 &&
          adverts.map((advert: IAdvert) => (
            <Card key={advert.id} advert={advert} />
          ))}
      </List>

      {isAdvertsExist && (
        <BtnLink type="button" onClick={handleClick}>
          Load more
        </BtnLink>
      )}
    </PageContainer>
  );
};
