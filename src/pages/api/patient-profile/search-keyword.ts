import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
  }

  const requestBody = req.body;
  const requestPath = 'https://atlasapi.optimizecare.com/api/v1/cda/search';

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  // delete later : disable auth for developing
  myHeaders.append('Authorization', 'uga uga');

  const urlencoded = new URLSearchParams();
  urlencoded.append('SearchText', requestBody.SearchText);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow' as RequestRedirect,
  };

  try {
    const response = await fetch(requestPath, requestOptions);
    const patientsData = await response.json();
    const { headers } = response;
    const CountPatients = parseInt(headers.get('X-Count-Patients') || '0', 10);

    res.status(200).json({
      patientsData,
      CountPatients,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`error search-keyword.ts: \n${error}`);
    res.status(500).json({
      message: 'fetch failed',
    });
  }
}
