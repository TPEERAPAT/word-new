import type { RequestCookies } from 'next/dist/server/web/spec-extension/cookies';

export interface MyCookie extends RequestCookies {
  access_token: string;
}
