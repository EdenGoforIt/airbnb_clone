import { Nunito } from 'next/font/google';
import { Suspense } from 'react';
import getCurrentUser from './actions/getCurrentUser';
import ClientOnly from './components/ClientOnly';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import RentModal from './components/modals/RentModal';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import Loading from './loading';
import ToasterProvider from './providers/ToasterProvider';

export const metadata = {
  title: 'Air BnB',
  description: 'Air Bnb Created By Eden'
};

const font = Nunito({
  subsets: ['latin']
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <Navbar currentUser={currentUser} />
          <RegisterModal />
          <LoginModal />
          <RentModal />
        </ClientOnly>
        <Suspense fallback={<Loading />}>
          <div className="pb-20 pt-28">{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
