import axios, { HttpStatusCode } from 'axios';
import { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_API_VERSION } from 'environments';
import type { NextApiRequest, NextApiResponse } from 'next';

import type { Tag } from '#types/Campaign';

const getCampaignTags = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axios.get<Tag[]>(
      `${NEXT_PUBLIC_API_URL}/${NEXT_PUBLIC_API_VERSION}/campaigns/tags`,
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

export default getCampaignTags;
