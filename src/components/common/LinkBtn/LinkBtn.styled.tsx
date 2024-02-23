import styled from 'styled-components';

export const LinkBtn = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 50px;

  width: 168px;
  height: 44px;

  background: ${({ theme }) => theme.colorButton};
  border-radius: 12px;
  text-decoration: none;

  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colorButtonText};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colorActive};
  }
`;
