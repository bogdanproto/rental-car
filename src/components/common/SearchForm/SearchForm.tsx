import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../Button/Button.styled';
import { InputConnectBox, SearchFormStyled } from './SearchForm.styled';
import { Select } from '../Select/Select';
import { createArrSelect } from 'services/helpers';
import { Input } from '../Input/Input';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { selectMakes } from 'services/redux/selectors';
import { useEffect } from 'react';
import { getAllMakes } from 'services/redux/operations/getAllMakes';

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
  const dispatch = useTypeDispatch();
  const options = useTypeSelector(selectMakes);

  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    resolver: yupResolver(schemaSearchForm),
  });

  useEffect(() => {
    if (options.length) {
      return;
    }
    dispatch(getAllMakes(null));
  }, [dispatch, options.length]);

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
