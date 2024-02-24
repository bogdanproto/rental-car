import styled from 'styled-components';

export const SelectStyled = styled.div`
  display: flex;
  flex-direction: column;
  label {
    padding-left: 8px;

    font-size: 12px;
    font-weight: bold;
    line-height: 28px;

    color: ${({ theme }) => theme.colorLabel};
  }

  select {
    width: 100%;
    height: 48px;
    box-sizing: border-box;

    padding: 14px 18px 14px 18px;

    border: none;
    box-shadow: ${({ theme }) => theme.shadowInput};
    border-radius: 14px;
    outline: none;

    background-color: ${({ theme }) => theme.colorInputBackgroud};
    color: ${({ theme }) => theme.colorInputText};

    transition: all ${({ theme }) => theme.cubicTransition};
  }
`;
