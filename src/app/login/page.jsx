'use client';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

const page = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    toast.success('Login Successful');
  };
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-base-content'>
          Sign in to your account
        </h2>
      </div>
      <div className='mt-6 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-5' onSubmit={(handleLogin)}>
          <div>
            <label htmlFor='email' className='block text-sm font-medium leading-6 text-base-content'>
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                placeholder='Type here'
                className='input input-bordered w-full max-w-xl '
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label htmlFor='password' className='block text-sm font-medium leading-6 text-base-content'>
                Password
              </label>
              <div className='text-sm'>
                <a href='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>
                  Forgot password?
                </a>
              </div>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='password'
                required
                placeholder='Type here'
                className='input input-bordered w-full max-w-xl '
              />
            </div>
          </div>
          <div className='text-sm text-end'>
            <Link href='/register' className='font-semibold text-indigo-600 hover:text-indigo-500'>
              Do not have an account ?, Sign Up
            </Link>
          </div>
          <div>
            <button className='btn btn-primary max-w-xl w-full' type='submit'>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
