import '@/styles/globals.css';

import ActiveStatus from '@/components/ActiveStatus';
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

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
