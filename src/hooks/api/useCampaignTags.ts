import axios from 'axios';
import useSWR from 'swr';

import type { Tag } from '#types/Campaign';

const fetcher = async () => {
  const { data } = await axios.get<{ data: Tag[] }>('/api/getCampaignTags/', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

const useCampaignTags = () => {
  const { data, error } = useSWR(['useCampaignTags'], fetcher);

  return {
    error,
    isLoading: !data && !error,
    data: data?.data,
  };
};

export default useCampaignTags;
