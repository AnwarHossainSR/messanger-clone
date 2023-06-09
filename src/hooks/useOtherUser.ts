import type { User } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

import type { FullConversationType } from '../types';

const useOtherUser = (
  conversation: FullConversationType | { users: User[] }
) => {
  const session = useSession();

  const otherUser = useMemo(() => {
    const currentUserEmail = session.data?.user?.email;

    // eslint-disable-next-line no-shadow
    const otherUser = conversation.users.filter(
      (user: any) => user.email !== currentUserEmail
    );

    return otherUser[0];
  }, [session.data?.user?.email, conversation.users]);

  return otherUser;
};

export default useOtherUser;
