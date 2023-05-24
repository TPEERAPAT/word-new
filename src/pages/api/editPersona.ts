import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const requestBody = req.body;
  const requestPath = `https://atlasapi.optimizecare.com/api/v2/personas/${requestBody.EditUUID}`;
  const AccessToken = req.cookies.access_token || 'ugauga'; // delete later when auth is done
  const myHeaders = new Headers();
  myHeaders.append('Authorization', AccessToken);
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    PersonaName: requestBody.PersonaName,
    Alias: requestBody.Alias,
    ShortDetail: requestBody.Description,
    Cost: requestBody.Cost,
    Demographic: requestBody.Demographic > 0 ? requestBody.Demographic : null,
    ClinicalCaptures:
      requestBody.ClinicalCaptures.length > 0
        ? requestBody.ClinicalCaptures
        : null,
    Condition: requestBody.Condition.length > 0 ? requestBody.Condition : null,
    VisitLocations:
      requestBody.VisitLocations.length > 0 ? requestBody.VisitLocations : null,
    StartValidityDate: requestBody.StartValidityDate,
    EndValidityDate: requestBody.EndValidityDate,
  });

  const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow' as const,
  };

  try {
    const response = await fetch(requestPath, requestOptions);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(500).json({
      message: 'fetch failed',
    });
  }
}
