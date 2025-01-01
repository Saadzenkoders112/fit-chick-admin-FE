import Image from 'next/image';
import React from 'react';
import esteric from '../../../public/assets/images/esteric.svg';

interface CustomFileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  img: string;
  format: string;
  text: string;
}

const FileInput: React.FC<CustomFileInputProps> = ({
  label,
  required,
  // className,
  img,
  format,
  text,
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
      <div className='flex items-center justify-center w-full'>
        <label
          htmlFor='dropzone-file'
          className='flex flex-col items-center justify-center w-full h-64 border rounded-lg cursor-pointer hover:bg-gray-100 duration-200'
        >
          <div className='flex flex-col items-center justify-center pt-5 pb-6 w-48 text-center'>
            <Image
              src={img}
              alt='upload-icon'
              height={30}
              width={30}
            />
            <p className='mb-2 text-sm'>{text}</p>
            <p className='text-xs text-gray-500 dark:text-gray-400'>{format}</p>
          </div>
          <input
            id='dropzone-file'
            type='file'
            className='hidden'
            {...rest}
          />
        </label>
      </div>
    </div>
  );
};

export default FileInput;
