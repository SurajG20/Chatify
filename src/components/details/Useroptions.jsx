import Image from 'next/image';
import React from 'react';

const Useroptions = () => {
  return (
    <div className='join join-vertical w-full flex-1'>
      <div className='collapse collapse-arrow join-item border border-base-300 '>
        <input type='radio' name='my-accordion-4' defaultChecked />
        <div className='collapse-title font-medium'>Chat Settings</div>
        <div className='collapse-content'>
          <p>hello</p>
        </div>
      </div>
      <div className='collapse collapse-arrow join-item border border-base-300'>
        <input type='radio' name='my-accordion-4' />
        <div className='collapse-title font-medium'>Privacy and help</div>
        <div className='collapse-content'>
          <p>hello</p>
        </div>
      </div>
      <div className='collapse collapse-arrow join-item border border-base-300'>
        <input type='radio' name='my-accordion-4' />
        <div className='collapse-title  font-medium'>Shared Photos</div>
        <div className='collapse-content'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-x-4'>
              <div className='mask mask-square cursor-pointer'>
                <Image
                  src={'https://xsgames.co/randomusers/assets/avatars/male/77.jpg'}
                  width={30}
                  height={30}
                  alt='avatar'
                />
              </div>
              <div>photo365.png</div>
            </div>
            <div className='cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                <path
                  fillRule='evenodd'
                  d='M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='collapse collapse-arrow join-item border border-base-300'>
        <input type='radio' name='my-accordion-4' />
        <div className='collapse-title font-medium'>Shared Files</div>
        <div className='collapse-content'>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Useroptions;
