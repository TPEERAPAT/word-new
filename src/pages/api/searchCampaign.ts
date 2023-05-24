import axios, { HttpStatusCode } from 'axios';
import { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_API_VERSION } from 'environments';
import type { NextApiRequest, NextApiResponse } from 'next';

import type { Campaign, CampaignPayload } from '#types/Campaign';

interface SearchCampaignPayload {
  keyword: string;
  progress: string[];
  users: string[];
  startDate: string;
  endDate: string;
}

const searchCampaign = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    keyword,
    progress,
    users,
    startDate,
    endDate,
  }: SearchCampaignPayload = req.body;

  const payload: CampaignPayload = {
    CampaignName: null,
    Progress: null,
    UserIDs: null,
    StartAvailabilityDate: null,
    EndAvailabilityDate: null,
  };

  if (keyword) payload.CampaignName = keyword;
  if (progress) payload.Progress = progress;
  if (users) {
    payload.UserIDs = users;
  }
  if (startDate) payload.StartAvailabilityDate = startDate;
  if (endDate) payload.EndAvailabilityDate = endDate;

  try {
    const { data } = await axios.post<{ data: Campaign[] }>(
      `${NEXT_PUBLIC_API_URL}/${NEXT_PUBLIC_API_VERSION}/campaigns/search`,
      payload
    );

    res.status(HttpStatusCode.Ok).json(data);
  } catch (error) {
    res.status(HttpStatusCode.InternalServerError).json({
      message: error,
    });
  }
};

export default searchCampaign;
