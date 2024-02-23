import { routePage } from 'const';
import { HeaderContainer } from './Header.styled';
import { LinkStyled, Logo } from 'components/common';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectParams } from 'services/redux/selectors';

export const Header = () => {
  const location = useLocation();
  // eslint-disable-next-line
  const [_, setSearchParams] = useSearchParams();

  const { page, limit } = useTypeSelector(selectParams);

  useEffect(() => {
    if (location.pathname !== routePage.CATALOG || Number(page) < 1) {
      return;
    }
    setSearchParams({ page, limit });
  }, [limit, location.pathname, page, setSearchParams]);

  return (
    <HeaderContainer>
      <nav>
        <LinkStyled to={routePage.BASE}>Home</LinkStyled>
        <LinkStyled to={routePage.CATALOG}>Catalog</LinkStyled>
        <LinkStyled to={routePage.FAVORITES}>Favorites</LinkStyled>
      </nav>
      <Logo />
    </HeaderContainer>
  );
};
