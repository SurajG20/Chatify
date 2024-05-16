import Image from 'next/image';
import React from 'react';

const Userdetail = () => {
  return (
      <div className='flex flex-col items-center gap-y-2 px-10 py-6 border-b border-b-base-content'>
        <div className='mask mask-circle cursor-pointer'>
          <Image
            src={'https://xsgames.co/randomusers/assets/avatars/male/77.jpg'}
            width={60}
            height={60}
            alt='avatar'
          />
        </div>
        <h2 className='text-lg font-semibold'>Micheal Johnson</h2>
        <h5 className='text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
    </div>
  );
};

export default Userdetail;
