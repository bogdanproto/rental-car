import { ChangeEvent } from 'react';
import { SelectForm } from './Select.styled';

interface SelectProps {
  label: string;
  placeholder: string;
  id: string;
  options: any;
  value: string;
  onChange: (evt: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = ({
  label,
  id,
  options,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <SelectForm>
      <label htmlFor={label}>{label}</label>

      <select id={id} name={id} value={value} onChange={onChange}>
        <option value="">{placeholder}</option>
      </select>
    </SelectForm>
  );
};
