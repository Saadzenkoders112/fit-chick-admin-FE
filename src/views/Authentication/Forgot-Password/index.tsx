'use client';

import { Button } from '@/components/ui/button';
import Input from '@/components/ui/input-field';
import React from 'react';
import arrowLeft from '../../../../public/assets/images/arrow-left.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import { useFormik } from 'formik';

const ForgotPassView = () => {
  const initialValues = {
    email: '',
  };

  const forgotPassValidationSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: forgotPassValidationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  const router = useRouter();
  return (
    <div className='w-4/5 flex flex-col gap-10'>
      <Link
        href='/auth/login'
        className='rounded-full p-1 border w-max h-max'
      >
        <Image
          src={arrowLeft}
          alt=''
          height={18}
          width={18}
        />
      </Link>
      <form
        onSubmit={formik.handleSubmit}
        className='w-4/5 flex flex-col gap-4'
      >
        <div className='flex flex-col gap-1'>
          <p className='font-playfair text-3xl font-semibold'>
            Forgot Password
          </p>
          <p className='text-sm text-gray-500'>
            Enter your email address for verification
          </p>
        </div>
        <Input
          label='Email'
          placeholder='eg. john@ex.com'
          type='email'
          required={true}
          className='text-sm'
        />
        <Button
          type='submit'
          onClick={() => router.push('/auth/otp-verification')}
          className='text-center p-4 rounded-lg bg-primary text-white'
        >
          Send Code
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassView;
