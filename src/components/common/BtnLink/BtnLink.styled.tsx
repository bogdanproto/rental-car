import styled from 'styled-components';

export const BtnLink = styled.button`
  width: 100%;
  height: 24px;

  font-size: 16px;
  line-height: 24px;

  background-color: transparent;
  text-decoration-line: underline;
  border: none;
  cursor: pointer;

  color: ${({ theme }) => theme.colorButton};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colorActive};
  }
`;
