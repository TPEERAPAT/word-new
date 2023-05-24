import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({
      message: 'Method not allowed',
    });
    return;
  }

  const requestPath = `https://atlasapi.optimizecare.com/api/v2/personas/search?page=${req.query.page}`;
  const myHeaders = new Headers();
  const accessToken = req.cookies.access_token || 'ugauga'; // delete later when auth is done
  myHeaders.append('Authorization', accessToken);
  myHeaders.append('X-Request-ID', '0519b2de-e84c-430d-8a7d-fd8ae03b250b');
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    PersonaName: req.body.PersonaName,
    ClinicalCapture: req.body.ClinicalCapture,
    Location: req.body.Location,
    Condition: req.body.Condition,
    Demographic: req.body.Demographic,
    CampaignIds: null,
    StartValidityDate: req.body.StartValidityDate,
    EndValidityDate: req.body.EndValidityDate,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow' as const,
  };

  try {
    const response = await fetch(requestPath, requestOptions);
    const { headers } = response;
    const CountPersona = headers.get('X-Count-Personas') || '0';
    const { data, status } = await response.json();

    res.status(200).setHeader('X-Count-Personas', CountPersona);
    res.status(200).json({
      data,
      status,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`error searchPersona.ts: \n${error}`);
    res.status(500).json({
      data: {},
      status: 'failure',
    });
  }
}
