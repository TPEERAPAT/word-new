import axios, { HttpStatusCode } from 'axios';
import { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_API_VERSION } from 'environments';
import type { NextApiRequest, NextApiResponse } from 'next';

import type { CampaignActivity } from '#types/Campaign';

interface GetCampaignActivitiesPayload {
  activityId: string;
}

const getCampaignActivityById = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { activityId }: GetCampaignActivitiesPayload = req.body;

  try {
    const { data } = await axios.get<{
      status: string;
      data: CampaignActivity;
    }>(
      `${NEXT_PUBLIC_API_URL}/${NEXT_PUBLIC_API_VERSION}/activities/${activityId}`,
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

export default getCampaignActivityById;
