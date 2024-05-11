import List from '@/components/List';
import Chat from '@/components/Chat';
import Details from '@/components/Details';
export default function Home() {
  return (
    <div className='flex w-full h-full '>
      <List />
      <Chat />
      <Details />
    </div>
  );
}
