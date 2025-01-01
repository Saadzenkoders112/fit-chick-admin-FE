import Image from 'next/image';
import React from 'react';
import esteric from '../../../public/assets/images/esteric.svg';
import { DropdownProps } from '@/types/Interfaces/common/dropdown-interface';

interface CustomSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    DropdownProps {
  label?: string;
  required?: boolean;
}

const SelectInput: React.FC<CustomSelectProps> = ({
  label,
  required,
  className,
  options,
  ...rest
}) => {
  console.log(options);
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-1'>
        <label className='text-sm'>{label}</label>
        {required && (
          <Image
            src={esteric}
            alt=''
            height={6}
            width={6}
          />
        )}
      </div>
      <select
        className={`border rounded-lg p-4 text-textPrimary focus:outline-primary ${className ? className : ''}`}
        defaultValue=''
        {...rest}
      >
        <option
          className='text-gray-500'
          value=''
          disabled
          hidden
        >
          Select category
        </option>
        {options?.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className='rounded-none'
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
