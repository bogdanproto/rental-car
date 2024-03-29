import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: 800;
  color: ${({ theme }) => theme.colorInputText};
`;
