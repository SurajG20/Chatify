import React from 'react';

const Userbutton = () => {
  return (
    <div className='flex flex-col gap-y-2 my-2'>
      <div className='w-full text-center'>
        <button className='btn btn-error btn-sm btn-wide'>Block User</button>
      </div>
      <div className='w-full text-center'>
        <button className='btn btn-secondary btn-wide btn-sm'>Logout</button>
      </div>
    </div>
  );
};

export default Userbutton;
