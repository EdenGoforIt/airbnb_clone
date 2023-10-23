'use client';

import useCountries from '@/app/hooks/useCountry';
import React from 'react';
import { Control, Controller, FieldErrors, FieldValues } from 'react-hook-form';
import Select from 'react-select';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
  control: Control<FieldValues, any>;
  errors: FieldErrors;
  controlName: string;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange, control, controlName, errors }) => {
  const { getAll } = useCountries();

  if (!controlName) {
    return null;
  }
  return (
    <Controller
      name={controlName}
      control={control}
      rules={{ required: 'Please select an option' }}
      render={({ field }) => (
        <div>
          <Select
            {...field}
            required
            placeholder="Anywhere"
            options={getAll()}
            isClearable
            value={value}
            onChange={(value) => onChange(value as CountrySelectValue)}
            formatOptionLabel={(option: any) => (
              <div className="flex flex-row items-center gap-3">
                <div>{option.flag}</div>
                <div>
                  {option.label}
                  <span className="text-neutral-500 ml-1">{option.region}</span>
                </div>
              </div>
            )}
            classNames={{
              control: () =>
                `p-3 ${
                  !!errors[controlName]
                    ? 'border-rose-500 focus:border-rose-500 shadow-none'
                    : 'border-neutral-300 focus:border-black  '
                }`,
              input: () =>
                `text-lg ${
                  !!errors[controlName]
                    ? 'border-rose-500 focus:border-rose-500 shadow-none'
                    : 'border-neutral-300 focus:border-black  '
                }`,
              option: () => 'text-lg'
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 6,
              colors: {
                ...theme.colors,
                primary: 'black',
                primary25: '#ffe4e6'
              }
            })}
          />
          {errors[controlName] && <p className="text-rose-500 text-sm">{errors[controlName]?.message as string}</p>}{' '}
        </div>
      )}
    />
  );
};

export default CountrySelect;
