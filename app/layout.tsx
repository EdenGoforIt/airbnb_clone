import { Nunito } from 'next/font/google';

import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import RentModal from '@/app/components/modals/RentModal';
import Navbar from '@/app/components/navbar/Navbar';

import ToasterProvider from '@/app/providers/ToasterProvider';

import getCurrentUser from './actions/getCurrentUser';
import ClientOnly from './components/ClientOnly';
import './globals.css';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone'
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
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
