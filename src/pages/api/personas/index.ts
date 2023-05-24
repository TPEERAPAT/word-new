import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const requestPath = 'https://atlasapi.optimizecare.com/api/v2/personas';
    const myHeaders = new Headers();
    myHeaders.append('X-Request-ID', '0519b2de-e84c-430d-8a7d-fd8ae03b250b');
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3NzIyNzYyOCwianRpIjoiYTcwYjAwY2QtMmRlOS00NDEzLWFmOWItZWRhZmRkNTY3NDQ2IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJlbWFpbCI6ImhlbGxvd29ybGRAZ21haWwuY29tIiwicm9sZV9pZCI6IjYzZTQ5MTUyM2FkMGJiMTUyNmE2ZjdmNCIsImV4cCI6IkZyaSwgMDMgTWFyIDIwMjMgMDg6MzM6NDggR01UIn0sIm5iZiI6MTY3NzIyNzYyOCwiZXhwIjoxNjc3MjI3NjM1fQ.zoCwLg3FmcpQZVHkqSp_PqIuSGTZ93Qu4naMGUrU7l0'
    );

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(req.body),
      redirect: 'follow' as RequestRedirect,
    };

    try {
      const response = await fetch(requestPath, requestOptions);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error });
      // eslint-disable-next-line no-console
      console.log(`
        __________________ Clinical X (Error) __________________\n
        error request body: \n${req.body}\n\n}
        error response: \n${error}\n
      `);
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
