import Chip from '@components/Chip/Chip';
import { Fragment } from 'react';

import type { DemographicPersonaLibrary } from '#types/Campaign';

interface Props {
  dataCapture: DemographicPersonaLibrary[];
  capturesIds: string[];
  color: 'green' | 'red' | 'blue' | 'seaBlue' | 'yellow' | 'white';
}

const CampaignPersonaDemographic = ({
  capturesIds,
  dataCapture,
  color,
}: Props) => {
  const filter = dataCapture.filter((cus) => {
    if (capturesIds.find((per) => per === cus.uuid)) return true;
    return false;
  });

  if (!filter) return null;

  return (
    <>
      {filter.map((data, index) => {
        return (
          <Fragment key={index}>
            <Chip text={data.Name} color={color} bold />
            <Chip text={data.Agreement} color={color} bold />
            <Chip text={data.Office} color={color} bold />
          </Fragment>
        );
      })}
    </>
  );
};

export default CampaignPersonaDemographic;
