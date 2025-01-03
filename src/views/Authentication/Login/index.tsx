'use client';

import { Button } from '@/components/ui/button';
import Input from '@/components/ui/input-field';
import PasswordInput from '@/components/ui/password-input-field';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
// React Imports
import { FC, useState } from 'react';
import { UseAdminLogin } from '@/services/auth/login-service';
import toast from 'react-hot-toast';
// import Loader from '@/components/ui/loader';
interface ISignInViewProps {}

const SignInView: FC<ISignInViewProps> = () => {
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const { mutate: adminLogin } = UseAdminLogin();
  const initialValues = {
    email: '',
    password: '',
  };

  const loginSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: values => {
      setSubmitting(true);
      adminLogin(values, {
        onSuccess(data) {
          if (data.accessToken) {
            toast.success('Logged In');
          }
        },
        onError(error) {
          toast.error(error.message);
        },
        onSettled() {
          setSubmitting(false);
          formik.resetForm();
        },
      });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='flex flex-col lg:items-start items-center gap-4 w-full px-10'
    >
      <div className='flex flex-col gap-4 sm:w-4/5 w-11/12'>
        <p className='text-3xl font-playfair font-semibold'>Login</p>
        <div className='flex flex-col gap-1'>
          <Input
            label='Email'
            placeholder='eg. john@ex.com'
            name='email'
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            className='text-sm'
          />
          {formik.touched.email && formik.errors.email && (
            <p className='text-xs text-red-500'>{formik.errors.email}</p>
          )}
        </div>
        <div className='flex flex-col gap-1'>
          <PasswordInput
            label='Password'
            placeholder='abc@123'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            className='text-sm'
          />
          {formik.touched.password && formik.errors.password && (
            <p className='text-xs text-red-500'>{formik.errors.password}</p>
          )}
        </div>
        <Link
          href='/auth/forgot-password'
          className='text-secondary text-sm text-end'
        >
          Forgot password
        </Link>
        <Button
          type='submit'
          className='text-center p-4 rounded-lg bg-primary text-white'
          disabled={isSubmitting}
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default SignInView;
