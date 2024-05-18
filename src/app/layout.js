import { Inter } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from '@/context/UserContext';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home Page',
  description: 'This is the home page'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-main bg-center bg-cover h-screen w-screen flex justify-center items-center opacity-75`}
      >
        <UserProvider>
          <main className='h-[90vh] w-[90vw] bg-base-100 rounded-xl  backdrop-opacity-75 backdrop-saturate-150 border border-solid border-opacity-10 border-base-300 p-2 bg-opacity-75'>
            <ToastContainer position='bottom-right' />
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
