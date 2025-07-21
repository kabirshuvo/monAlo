
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import AuthProvider from '@/components/providers/AuthProvider';
import ReduxProvider from '@/components/providers/ReduxProvider';
import Header from '@/components/Header';
import Footer from "@/components/Footer";

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
            <Footer />
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
