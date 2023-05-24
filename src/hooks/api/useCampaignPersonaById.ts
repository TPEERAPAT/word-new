import axios from 'axios';
import type { SetStateAction } from 'react';
import { useEffect } from 'react';
import useSWR from 'swr';

import type { CampaignPersona } from '#types/Campaign';

const fetcher = async (personaId: string) => {
  if (!personaId) return undefined;
  const { data } = await axios.post<{ data: CampaignPersona }>(
    `/api/getPersonaById/`,
    { personaId },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return data.data;
};

const useCampaignPersonaById = (
  personaId: string,
  setEstimatedSize: (value: SetStateAction<number>) => void,
  setEstimatedValuation: (value: SetStateAction<number>) => void
) => {
  const { data, error } = useSWR([personaId], fetcher);

  useEffect(() => {
    if (!data) return;
    const plusCountPatients = data.CountPatients * data.Cost;
    setEstimatedSize((prevValue: number) => prevValue + data.CountPatients);
    setEstimatedValuation((prevValue: number) => prevValue + plusCountPatients);
  }, [data]);

  return {
    error,
    isLoading: !data && !error,
    data,
  };
};

export default useCampaignPersonaById;
