import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;

  input {
    width: 125px;
  }

  select {
    &[name='price'] {
      width: 160px;
    }

    &[name='make'] {
      width: 224px;
    }
  }

  input {
    &[name='mileageFrom'] {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &[name='mileageTo'] {
      padding-left: 38px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  button {
    width: 136px;
    height: 48px;
    padding: 0;
  }
`;

export const InputConnectBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ErrorInputForm = styled.span`
  position: absolute;
  bottom: -14px;
  left: 4px;

  font-size: 12px;

  color: ${({ theme }) => theme.colorErrorsInput};
`;
