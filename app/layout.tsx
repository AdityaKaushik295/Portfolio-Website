import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Aditya Kaushik',
  description: 'Portfolio website of Aditya Kaushik, a Full Stack Engineer specializing in scalable applications, cloud architecture, and AI-driven solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}