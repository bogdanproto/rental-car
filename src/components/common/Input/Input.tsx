import { InputStyled } from './Input.styled';

interface InputProps {
  type: string;
  content: string;
  label?: string;
  register: any;
}

export const Input: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, type, content, register, ...props }) => {
  return (
    <InputStyled>
      <label htmlFor={register.name}>{label}</label>

      <div>
        <input type={type} {...register} {...props} />
        <span>{content}</span>
      </div>
    </InputStyled>
  );
};
