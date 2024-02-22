import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px 29px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colorMainText};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colorMainText};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colorMainText};
  }
`;
