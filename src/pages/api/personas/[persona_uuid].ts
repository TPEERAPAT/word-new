import type { NextApiRequest, NextApiResponse } from 'next';

// delete persona
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const requestPath = `https://atlasapi.optimizecare.com/api/v2/personas/${req.query.persona_uuid}`;
  const accessToken = 'Ugauga';
  if (req.method === 'DELETE') {
    const myHeaders = new Headers();
    myHeaders.append('X-Request-ID', '0519b2de-e84c-430d-8a7d-fd8ae03b250b');
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow' as RequestRedirect,
    };

    try {
      const response = await fetch(requestPath, requestOptions);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(
        `error /personas/[persona_uuid].ts \ncan't delete persona: \n${error}`
      );
      res.status(500).json({
        message: 'fetch failed',
      });
    }
  }

  if (req.method === 'PUT') {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    const raw = JSON.stringify(req.body);

    const requestOptions = {
      method: 'PUT',
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
      console.log(
        `error /personas/[persona_uuid].ts \ncan't update persona: \n${error}`
      );
      res.status(500).json({
        message: 'fetch failed',
      });
    }
  }

  res.redirect(404, '/api/personas');
  res.status(404).json({
    message: 'not found',
  });
}
