import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 8px;

  background-color: ${({ theme }) => theme.colorCardBcg};
  border: none;
  border-radius: 4px;
  font-size: 12px;

  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: all ${({ theme }) => theme.cubicTransition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colorActive};
  }

  svg {
    font-size: 28px;
  }
`;
