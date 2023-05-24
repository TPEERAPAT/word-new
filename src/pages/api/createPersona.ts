import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.method !== 'POST') {
  //   res.status(405).json({ message: 'Method not allowed' });
  //   return;
  // }
  const requestBody = req.body;
  const requestPath = 'https://atlasapi.optimizecare.com/api/v2/personas';
  const AccessToken = req.cookies.access_token || 'ugauga'; // delete later when auth is done

  const myHeaders = new Headers();
  myHeaders.append('X-Request-ID', '0519b2de-e84c-430d-8a7d-fd8ae03b250b');
  myHeaders.append('Authorization', AccessToken);
  myHeaders.append('Content-Type', 'application/json');

  const requestObject: any = {
    PersonaName: requestBody.PersonaName,
    Alias: requestBody.Alias,
    ShortDetail: requestBody.ShortDetail,
    Cost: requestBody.Cost,
    ClinicalCaptures:
      requestBody.ClinicalCaptures.length > 0
        ? requestBody.ClinicalCaptures
        : null,
    HealthConditions: requestBody.HealthConditions,
    Demographic: null,
    VisitLocations:
      requestBody.VisitLocations.length > 0 ? requestBody.VisitLocations : null,
  };

  if (requestBody.StartValidityDate !== '') {
    requestObject.StartValidityDate = requestBody.StartValidityDate;
  } else {
    requestObject.StartValidityDate = '1970-12-28';
  }

  if (requestBody.EndValidityDate !== '') {
    requestObject.EndValidityDate = requestBody.EndValidityDate;
  } else {
    requestObject.EndValidityDate = '2025-12-29';
  }

  const raw = JSON.stringify(requestObject);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow' as RequestRedirect,
  };

  try {
    const response = await fetch(requestPath, requestOptions);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`error createPersona.ts: \n${error}`);
    res.status(500).json({
      message: 'fetch failed',
    });
  }
}
