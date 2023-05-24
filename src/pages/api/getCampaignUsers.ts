import axios, { HttpStatusCode } from 'axios';
import { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_API_VERSION } from 'environments';
import type { NextApiRequest, NextApiResponse } from 'next';

import type { CampaignUser } from '#types/Campaign';

const getCampaignUsers = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axios.get<CampaignUser[]>(
      `${NEXT_PUBLIC_API_URL}/${NEXT_PUBLIC_API_VERSION}/users`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    res.status(HttpStatusCode.Ok).json(data);
  } catch (error) {
    res.status(HttpStatusCode.InternalServerError).json({
      message: error,
    });
  }
};

export default getCampaignUsers;
