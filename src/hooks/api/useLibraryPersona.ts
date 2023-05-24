import axios from 'axios';
import useSWR from 'swr';

import type { CampaignPersonaLibrary } from '#types/Campaign';

const fetcher = async () => {
  const { data } = await axios.get<{
    data: CampaignPersonaLibrary;
    status: string;
  }>(`/api/libraryPersona/`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data.data;
};

const useLibraryPersona = () => {
  const { data, error } = useSWR(['useLibraryPersona'], fetcher);

  return {
    error,
    isLoading: !data && !error,
    data,
  };
};

export default useLibraryPersona;
