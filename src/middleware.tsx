import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/',
  },
});

export const config = {
  matcher: ['/conversations/:path*', '/users/:path*'],
};

// import type { NextRequest } from 'next/server';
// import { NextResponse } from 'next/server';

// export default async function middleware(req: NextRequest) {
//   const authUser = true;

//   if (!authUser)
//     return NextResponse.redirect(new URL('/unauthorized', req.url), req);

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/conversations/:path*', '/users/:path*'],
// };
