import type { NextRequest, NextResponse } from 'next/server';

export default async function handler(req: NextRequest, res: NextResponse) {
  // delete GET later
  if (req.method === 'POST' || req.method === 'GET') {
    // @ts-ignore
    const { HN, VN } = req.body;
    const requestPath =
      'https://atlasapi.optimizecare.com/api/v1/checkup/process-visit';
    const myHeaders = new Headers();
    // @ts-ignore
    const AccessToken = req.cookies.access_token || 'ugauga'; // delete later when auth is done
    myHeaders.append('Authorization', AccessToken);
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      HN,
      VisitUID: VN,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow' as RequestRedirect,
    };

    try {
      const response = await fetch(requestPath, requestOptions);
      const result = await response.json();
      if (result[0].status === 'success') {
        // @ts-ignore
        res.status(200).json({
          message: 'success',
          result,
        });
      } else if (result.message === 'unexpected error') {
        // @ts-ignore
        res.status(500).json({
          message: 'unexpected error',
          result,
        });
      } else {
        // @ts-ignore
        res.status(500).json({
          message: 'error',
          result,
        });
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`error singleSubmit.ts: \n${error}`);
      // @ts-ignore
      res.status(500).json({
        message: 'fetch failed',
        error,
      });
    }
  } else {
    // @ts-ignore
    res.status(405).json({
      message: 'method not allowed',
      error: 'Method not allowed',
    });
  }
}
