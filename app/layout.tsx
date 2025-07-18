
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import ReduxProvider from '@/components/providers/ReduxProvider';
import Header from '@/components/Header';
import AuthProvider from '@/components/providers/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MonAlo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
