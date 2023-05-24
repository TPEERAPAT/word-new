import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({
      message: 'Method not allowed',
    });
    return;
  }
  const requestPath =
    'https://atlasapi.optimizecare.com/api/v2/personas/library';
  const AccessToken = req.cookies.access_token || 'ugauga'; // delete later when auth is done
  const myHeaders = new Headers();
  myHeaders.append('Authorization', AccessToken);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as const,
  };

  try {
    const response = await fetch(requestPath, requestOptions);
    const { data, status } = await response.json();
    res.status(200).json({
      data,
      status,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`error createPersona.ts: \n${error}`);
    res.status(500).json({
      message: 'fetch failed',
    });
  }
}
