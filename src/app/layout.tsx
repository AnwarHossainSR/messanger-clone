import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import AuthContext from '@/context/AuthContext';
import ToasterContext from '@/context/ToasterContext';
import type { ChildrenProps } from '@/types';

// export const metadata = {
//   description:
//     'A highly opinionated and complete starter for Next.js projects ready to production. Includes Typescript, Styled Components, Prettier, ESLint, Husky, SEO, and more.',
//   keywords:
//     'next, starter, typescript, tailwind css, prettier, eslint, husky, seo',
//   title: 'Next Starter',
// };

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
});

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AuthContext>
          <ToasterContext />
          {/* <ActiveStatus /> */}
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
