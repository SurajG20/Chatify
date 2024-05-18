'use client';
import List from '@/components/List';
import Chat from '@/components/Chat';
import Details from '@/components/Details';
import ProtectedRoute from '@/components/ProtectedRoute';
const Home = () => {
  return (
    <div className='flex w-full h-full '>
      <List />
      <Chat />
      <Details />
    </div>
  );
};

export default ProtectedRoute(Home);
