import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../Button/Button.styled';
import { InputConnectBox, SearchFormStyled } from './SearchForm.styled';
import { Select } from '../Select/Select';
import { createArrSelect } from 'services/helpers';
import { Input } from '../Input/Input';

const options = [
  {
    id: 1,
    label: 'Buick',
  },
  {
    id: 2,
    label: 'Volvo',
  },
  {
    id: 3,
    label: 'HUMMER',
  },
];

type Inputs = {
  make?: string;
  rentalPrice?: string;
  fromKm?: string;
  toKm?: string;
};

const schemaSearchForm = yup.object({
  make: yup.string(),
  rentalPrice: yup.string(),
  fromKm: yup.string(),
  toKm: yup.string(),
});

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schemaSearchForm),
  });

  console.log(errors);

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <SearchFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Select
        label="Car brand"
        placeholder="Enter the text"
        options={options}
        register={register('make')}
      />

      <Select
        label="Price/ 1 hour"
        placeholder="To $"
        options={createArrSelect(30)}
        register={register('rentalPrice')}
      />

      <InputConnectBox>
        <Input
          label="Сar mileage / km"
          type="text"
          content="From"
          register={register('fromKm')}
        />
        <Input type="text" content="To" register={register('toKm')} />
      </InputConnectBox>

      <Button type="submit" disabled={!isDirty}>
        Search
      </Button>
    </SearchFormStyled>
  );
};
