import { ChangeEvent } from 'react';
import { InputStyled } from './Input.styled';

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, id, type, placeholder, value, onChange, ...props }) => {
  return (
    <InputStyled>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </InputStyled>
  );
};
