import React from 'react';
import Topcontent from './chat/Topcontent';
import Messagecontent from './chat/Messagecontent';
import Bottomcontent from './chat/Bottomcontent';
const Chat = () => {
  return <section className='flex-[2_2_0%] border-x border-base-content flex flex-col w-full'>
    <Topcontent />
    <Messagecontent />
    <Bottomcontent />
  </section>;
};

export default Chat;
