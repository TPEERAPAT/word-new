import axios, { HttpStatusCode } from 'axios';
import { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_API_VERSION } from 'environments';
import type { NextApiRequest, NextApiResponse } from 'next';

import type { CampaignPersona } from '#types/Campaign';

interface GetPersonaByIdPayload {
  personaId: string;
}

const getPersonaById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { personaId }: GetPersonaByIdPayload = req.body;

  try {
    const { data } = await axios.get<{ data: CampaignPersona }>(
      `${NEXT_PUBLIC_API_URL}/${NEXT_PUBLIC_API_VERSION}/personas/${personaId}`,
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

export default getPersonaById;
