import React from 'react';
import Userbutton from './details/Userbutton';
import Userdetail from './details/Userdetail';
import Useroptions from './details/Useroptions';
const Details = () => {
  return <section className='flex-1 flex flex-col '>
    <Userdetail />
    <Useroptions />
    <Userbutton />
  </section>;
};

export default Details;
