import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-base-content'>
          Create Your Account.
        </h2>
      </div>
      <div className='mt-6 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-5' action='#' method='POST'>
          <div className='flex items-center justify-between'>
            <div>
              {' '}
              <div className='avatar'>
                <div className='w-14 rounded'>
                  <Image
                    src={'https://xsgames.co/randomusers/assets/avatars/male/77.jpg'}
                    width={36}
                    height={36}
                    alt='avatar'
                  />
                </div>
              </div>
            </div>
            <div className='cursor-pointer underline underline-offset-2 decoration-2'>Upload your profile picture</div>
          </div>
          <div>
            <label htmlFor='username' className='block text-base font-medium leading-6 text-base-content'>
              Username
            </label>
            <div className='mt-2'>
              <input
                id='username'
                name='username'
                type='username'
                autoComplete='username'
                required
                placeholder='Type here'
                className='input input-bordered w-full max-w-xl '
              />
            </div>
          </div>
          <div>
            <label htmlFor='email' className='block text-base font-medium leading-6 text-base-content'>
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
              <label htmlFor='password' className='block text-base font-medium leading-6 text-base-content'>
                Password
              </label>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='password'
                required
                placeholder='Type here'
                className='input input-bordered w-full max-w-xl'
              />
            </div>
          </div>
          <div className='text-sm text-end'>
            <Link href='/login' className='font-semibold text-indigo-600 hover:text-indigo-500'>
              Already Have an account ?, Sign In
            </Link>
          </div>
          <div>
            <button className='btn btn-primary max-w-xl w-full' type='submit'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
