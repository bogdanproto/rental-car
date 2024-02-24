import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../Button/Button.styled';
import {
  ErrorInputForm,
  InputConnectBox,
  SearchFormStyled,
} from './SearchForm.styled';
import { Select } from '../Select/Select';
import {
  createArrSelect,
  formatLabelSelect,
  verifyErrHF,
} from 'services/helpers';
import { Input } from '../Input/Input';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { selectMakes } from 'services/redux/selectors';
import { useEffect } from 'react';
import { getAllMakes } from 'services/redux/operations/getAllMakes';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { IFilter } from 'interfaces';

interface SearchFormProps {
  setFilter:
    | ActionCreatorWithPayload<IFilter, 'data/setCatalogFilter'>
    | ActionCreatorWithPayload<IFilter, 'data/setFavoriteFilter'>;
  currentFilter: IFilter;
}

const schemaSearchForm = yup.object({
  make: yup.string(),
  price: yup.string(),
  mileageFrom: yup.string(),
  mileageTo: yup.string(),
});

export const SearchForm: React.FC<SearchFormProps> = ({
  setFilter,
  currentFilter,
}) => {
  const dispatch = useTypeDispatch();
  const options = useTypeSelector(selectMakes);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      make: currentFilter.make,
      price: currentFilter.price,
      mileageFrom: currentFilter.mileageFrom,
      mileageTo: currentFilter.mileageTo,
    },
    resolver: yupResolver(schemaSearchForm),
  });

  useEffect(() => {
    if (options.length) {
      return;
    }
    dispatch(getAllMakes(null));
  }, [dispatch, options.length]);

  const onSubmit: SubmitHandler<any> = data => {
    const { mileageFrom, mileageTo } = data;

    const isError = verifyErrHF({ mileageFrom, mileageTo }, setError);

    if (isError) {
      return;
    }

    if (JSON.stringify(currentFilter) === JSON.stringify(data)) {
      return;
    }

    dispatch(setFilter(data));
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Select
        label="Car brand"
        placeholder="All brand"
        options={formatLabelSelect(options)}
        register={register('make')}
      />

      <Select
        label="Price/ 1 hour"
        placeholder="To $"
        options={createArrSelect(30)}
        register={register('price')}
      />

      <InputConnectBox>
        <Input
          label="Сar mileage/km"
          type="text"
          content="From"
          register={register('mileageFrom')}
        />
        <Input type="text" content="To" register={register('mileageTo')} />

        {(errors.mileageFrom || errors.mileageTo) && (
          <ErrorInputForm>
            {errors.mileageFrom?.message || errors.mileageTo?.message}
          </ErrorInputForm>
        )}
      </InputConnectBox>

      <Button type="submit">Search</Button>
    </SearchFormStyled>
  );
};
