import { LinkStyled } from 'components/common';
import styled from 'styled-components';

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 360px);

  img {
    max-width: 640px;
    height: auto;
  }

  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 16px;
  }
`;

export const LinkMainPage = styled(LinkStyled)`
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colorActive};
  }
`;
