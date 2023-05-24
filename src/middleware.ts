/**
 * every page is protected resource.
 * authenticated by access_token (JWT) in cookie to get authorized.
 * that can only get from login page (https://atlasclient-auth.optimizecare.com/).
 */

// we plan to use OAuth2.0 now, disable this middleware later.
// holy crap, I worked on this for a couple weeks

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// eslint-disable-next-line unused-imports/no-unused-vars
export default function middleware(req: NextRequest) {
  // const AccessToken = req.cookies.get('access_token');
  // const redirectURL =
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://atlasclient-auth.optimizecare.com/'
  //     : 'http://localhost:3001/';

  // if (!AccessToken) {
  //   return NextResponse.redirect(redirectURL);
  // }
  return NextResponse.next();
}
