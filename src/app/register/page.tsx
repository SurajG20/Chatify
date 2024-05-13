'use client';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';
import { auth, db } from '../../lib/firebase';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import upload from '@/lib/upload';
const Register = () => {
  const [avatar, setAvatar] = useState<{ file: File | undefined; url: string }>({ file: undefined, url: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    try {
      const res = await createUserWithEmailAndPassword(auth, email as string, password as string);
      const imgUrl = await upload(avatar.file);
      const docData = {
        username,
        email,
        avatar: imgUrl,
        createdAt: Timestamp.fromDate(new Date()),
        blocked: [],
        id: res.user.uid
      };
      await setDoc(doc(db, 'Users', res.user.uid), docData);
      await setDoc(doc(db, 'userChats', res.user.uid), {
        chats: []
      });
      setLoading(false);
      toast.success('Account created successfully');
      router.push('/login');
    } catch (error) {
      console.log(error);
      toast.warn('Something went wrong, please try again');
    } finally {
      setLoading(false);
    }
  };

  const handleAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? undefined;
    const url = file ? URL.createObjectURL(file) : '';
    setAvatar({ file, url });
  };
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-base-content'>
          Create Your Account.
        </h2>
      </div>
      <div className='mt-6 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-5' onSubmit={handleRegister}>
          <div>
            <label htmlFor='avatar' className='flex items-center justify-between'>
              <div className='avatar'>
                <div className='w-14 rounded'>
                  <Image src={avatar.url || '/images/avatar.jpg'} width={36} height={36} alt='avatar' />
                </div>
              </div>
              <div className='cursor-pointer underline underline-offset-2 decoration-2'>
                Upload your profile picture
              </div>
            </label>
            <input required type='file' className='hidden' id='avatar' name='avatar' onChange={handleAvatar} />
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
            <button disabled={loading} className='btn btn-primary max-w-xl w-full' type='submit'>
              {loading ? 'Loading' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
