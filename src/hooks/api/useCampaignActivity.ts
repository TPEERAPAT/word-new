import axios from 'axios';
import { useEffect } from 'react';
import useSWR from 'swr';

import type { CampaignActivity } from '#types/Campaign';

const fetcher = async (activityId: string) => {
  if (!activityId) return undefined;
  const { data } = await axios.post<{
    status: string;
    data: CampaignActivity;
  }>(
    `/api/getCampaignActivityById/`,
    { activityId },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return data;
};

const useCampaignActivity = (
  activityId: string,
  handleCount: (count: number) => void
) => {
  const { data, error } = useSWR([activityId], fetcher);

  useEffect(() => {
    if (!data) return;
    handleCount(data.data.TaskCompletion);
  }, [data]);

  return {
    error,
    isLoading: !data && !error,
    data: data?.data,
  };
};

export default useCampaignActivity;
