import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page, personaId } = req.body;
  const requestPath = `https://atlasapi.optimizecare.com/api/v2/personas/search-patients?page=${page}&persona-id=${personaId}}`;
  const accessToken = req.cookies.access_token || 'ugauga'; // delete later when auth is done
  const myHeaders = new Headers();
  myHeaders.append('Authorization', accessToken);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as const,
  };

  try {
    const response = await fetch(requestPath, requestOptions);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`error searchPatient.ts: \n${error}`);
    res.status(500).json({
      message: 'fetch failed',
    });
  }
}
