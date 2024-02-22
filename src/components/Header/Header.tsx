import { routePage } from 'const';
import { HeaderContainer } from './Header.styled';
import { LinkStyled, Logo } from 'components/common';

export const Header = () => {
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
