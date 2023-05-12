import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './navBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LegoLend',
  description: 'A website to where you can borrow lego sets',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
