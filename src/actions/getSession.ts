import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function getSession() {
  // eslint-disable-next-line no-return-await
  return await getServerSession(authOptions);
}
