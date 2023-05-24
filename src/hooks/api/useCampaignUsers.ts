import axios from 'axios';
import useSWR from 'swr';

import type { CampaignUser } from '#types/Campaign';

const fetcher = async () => {
  const { data } = await axios.get<CampaignUser[]>('/api/getCampaignUsers/');
  return data;
};

const useCampaignUsers = () => {
  const { data, error } = useSWR(['useCampaignUsers'], fetcher);

  return {
    error,
    isLoading: !data && !error,
    data,
  };
};

export default useCampaignUsers;
