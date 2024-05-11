import Image from 'next/image';
import React from 'react';

const Userdetail = () => {
  return (
      <div className='flex flex-col items-center gap-y-4 px-12 py-8  border-b border-b-base-content'>
        <div className='mask mask-circle cursor-pointer'>
          <Image
            src={'https://xsgames.co/randomusers/assets/avatars/male/77.jpg'}
            width={70}
            height={70}
            alt='avatar'
          />
        </div>
        <h2 className='text-2xl font-semibold'>Micheal Johnson</h2>
        <h5 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
    </div>
  );
};

export default Userdetail;
