import Image from 'next/image';
import React from 'react';
import esteric from '../../../public/assets/images/esteric.svg';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

const Input: React.FC<CustomInputProps> = ({
  label,
  required,
  className,
  ...rest
}) => {
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
      <input
        className={`border rounded-lg p-4 focus:outline-primary ${className ? className : ''}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
