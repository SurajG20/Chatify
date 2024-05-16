'use client';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      router.push('/');
      toast.success('Login Success');
    } catch (error) {
      console.log(error);
      toast.error('Login Failed');
    }
  };

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-base-content'>
          Sign in to your account
        </h2>
      </div>
      <div className='mt-6 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-5' onSubmit={handleLogin}>
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
            <button disabled={loading} className='btn btn-primary max-w-xl w-full' type='submit'>
              {loading ? 'Loading' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
