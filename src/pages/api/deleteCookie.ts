import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {
    res.setHeader('Set-Cookie', `access_token=; HttpOnly; Max-Age=0; Path=/;`);
    res.status(200).json({ message: 'Cookie deleted' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
