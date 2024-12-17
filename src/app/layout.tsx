import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BooksLife - 아이들의 문해력 향상',
  description: '함께 책을 읽고 이해하며 문해력을 키우는 공간',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">BooksLife</h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-200 p-4 text-center">
          <p>&copy; 2024 BooksLife. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
