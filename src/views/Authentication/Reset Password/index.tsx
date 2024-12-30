'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import arrowLeft from '../../../../public/assets/images/arrow-left.svg';
import PasswordInput from '@/components/ui/password-input-field';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button } from '@/components/ui/button';

const ResetPassView = () => {
  const initialValues = {
    password: '',
    confirm_password: '',
  };

  const resetPassValidationSchema = yup.object().shape({
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one special character',
      ),
    confirm_password: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password'), ''], 'Passwords must match'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: resetPassValidationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div className='w-4/5 flex flex-col gap-10'>
      <Link
        href='/auth/otp-verification'
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
            Create Password
          </p>
          <p className='text-sm text-gray-500'>
            Set a strong password and be sure to remember it. This will keep
            your account secure.
          </p>
        </div>
        <PasswordInput
          label='Password'
          placeholder='Password'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required={true}
          className='text-sm'
        />
        <PasswordInput
          label='Password'
          placeholder='Confirm New Password'
          name='confirm_password'
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required={true}
          className='text-sm'
        />

        <Button className='text-white'>Save</Button>
      </form>
    </div>
  );
};

export default ResetPassView;
