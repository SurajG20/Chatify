import React from 'react';
import Image from 'next/image';
const Chatlist = () => {
  return (
    <section className='overflow-auto'>
      <article>
        <div className='flex items-center gap-x-5 border-b border-base-content p-4'>
          <div className='mask mask-circle cursor-pointer'>
            <Image
              src={'https://xsgames.co/randomusers/assets/avatars/male/77.jpg'}
              width={35}
              height={35}
              alt='avatar'
            />
          </div>
          <div className='flex flex-col gap-y-2 '>
            <h2 className='text-lg font-medium'>Jane Dope</h2>
            <h4 className='text-sm'>Hello</h4>
          </div>
        </div>
      
      
      </article>
    </section>
  );
};

export default Chatlist;
