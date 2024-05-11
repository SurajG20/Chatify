import React from 'react';
import UserInfo from './list/UserInfo';
import Chatlist from './list/Chatlist';
import Searchbox from './list/Searchbox';
const List = () => {
  return (
    <section className='flex-1 h-full w-full overflow-hidden flex-col gap-y-2 flex'>
      <UserInfo />
      <Searchbox />
      <Chatlist />
    </section>
  );
};

export default List;
