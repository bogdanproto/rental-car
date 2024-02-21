import styled from 'styled-components';

export const SelectForm = styled.div`
  label {
    position: relative;
    padding-left: 8px;
    padding-bottom: 8px;

    font-size: 12px;
    font-weight: bold;
  }

  label::before {
    content: '*';
    position: absolute;

    left: 0;
    top: -2px;

    font-size: 14px;
    color: ${({ theme }) => theme.colorErrorsInput};
  }

  select {
    width: 100%;
    height: 36px;
    box-sizing: border-box;

    padding-left: 8px;

    border: 1px solid ${({ theme }) => theme.colorInputBorder};
    box-shadow: ${({ theme }) => theme.shadowInput};
    border-radius: 6px;

    color: ${({ theme }) => theme.colorInputText};

    transition: all ${({ theme }) => theme.cubicTransition};

    &:hover,
    &:focus {
      border: 1px solid ${({ theme }) => theme.colorActive};
    }

    select > option {
      width: 100%;
    }
  }
`;
