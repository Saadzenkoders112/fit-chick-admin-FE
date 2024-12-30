import Image from 'next/image';
import React, { useState } from 'react';
import esteric from '../../../public/assets/images/esteric.svg';
import eyeOff from '../../../public/assets/images/eye-off.svg';
import eye from '../../../public/assets/images/eye.svg';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

const PasswordInput: React.FC<CustomInputProps> = ({
  label,
  required,
  className,
  ...rest
}) => {
  const [isEye, setIsEye] = useState<boolean>(false);
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
      <div
        className={`flex justify-between items-center gap-2 rounded-lg p-4 group border focus-within:border-primary ${className ? className : ''}`}
      >
        <input
          type={isEye ? 'text' : 'password'}
          className='focus:outline-none w-full'
          {...rest}
        />
        <Image
          className='cursor-pointer'
          onClick={() => setIsEye(!isEye)}
          src={isEye ? eyeOff : eye}
          alt=''
          height={16}
          width={16}
        />
      </div>
    </div>
  );
};

export default PasswordInput;
