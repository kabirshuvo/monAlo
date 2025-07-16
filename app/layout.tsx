// app/layout.tsx
import "../styles/globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "@/components/providers/ReduxProvider"; // 👈 your wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MonAlo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
