'use client';
import Image from 'next/image';
import React from 'react';

const Messagecontent = () => {
  const endref = React.useRef(null);
  React.useEffect(() => {
    endref.current.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <div className='flex-1 border-y border-base-content w-full p-2 overflow-auto'>
      <div className='chat chat-start'>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <Image
              width={32}
              height={32}
              alt='Tailwind CSS chat bubble component'
              src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            />
          </div>
        </div>
        <div className='chat-header'>
          Obi-Wan Kenobi
          <time className='text-xs opacity-50 ml-2'>12:45</time>
        </div>
        <div className='chat-bubble'>You were the Chosen One!</div>
      </div>
      <div className='chat chat-end'>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <Image
              width={32}
              height={32}
              alt='Tailwind CSS chat bubble component'
              src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            />
          </div>
        </div>
        <div className='chat-header'>
          Anakin
          <time className='text-xs opacity-50 ml-2'>12:46</time>
        </div>
        <div className='chat-bubble'>I hate you!</div>
      </div>
      <div className='chat chat-end'>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <Image
              width={36}
              height={36}
              alt='Tailwind CSS chat bubble component'
              src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            />
          </div>
        </div>
        <div className='chat-header mb-2'>
          Anakin
          <time className='text-xs opacity-50 ml-2'>12:46</time>
        </div>
        <Image src='/images/background.jpg' alt='images' width={200} height={350} />
        <div className='chat-bubble'>I hate you!</div>
      </div>
    
      <div ref={endref}/>
    </div>
  );
};

export default Messagecontent;
