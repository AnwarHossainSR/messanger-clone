/* eslint-disable simple-import-sort/imports */

'use client';

import Link from 'next/link';
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="px-8 py-8 flex justify-between bg-gray-900 text-violet-50">
      <Link href="/">
        <span>Home</span>
      </Link>
    </header>
  );
};

export default Header;
