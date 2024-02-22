import styled from 'styled-components';

export const InputStyled = styled.div`
  label {
    padding-left: 8px;

    font-size: 12px;
    font-weight: bold;
    line-height: 28px;

    color: ${({ theme }) => theme.colorLabel};
  }

  div {
    position: relative;
  }

  input {
    width: 100%;
    height: 48px;
    box-sizing: border-box;

    padding: 14px 14px 14px 60px;

    border: none;
    box-shadow: ${({ theme }) => theme.shadowInput};
    border-radius: 14px;
    outline: none;

    background-color: ${({ theme }) => theme.colorInputBackgroud};
    color: ${({ theme }) => theme.colorInputText};

    transition: all ${({ theme }) => theme.cubicTransition};
  }

  span {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);

    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: ${({ theme }) => theme.colorInputText};
  }
`;
