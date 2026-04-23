import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'] });

export const metadata = {
  title: 'Towner – Distributor Opportunity | ವಿತರಕ ಅವಕಾಶ',
  description: 'Join Towner as a Distributor and build your income empowering drivers. Karnataka Government Supported Initiative.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;600;700;800&family=Noto+Sans+Kannada:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="preload"
          as="style"
        />
      </head>
      <body className={geist.className}>{children}</body>
    </html>
  );
}
