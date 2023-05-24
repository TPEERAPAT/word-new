import Chip from '@components/Chip/Chip';

import type { PersonaLibrary } from '#types/Campaign';

interface Props {
  dataCapture: PersonaLibrary[];
  capturesIds: string[];
  color: 'green' | 'red' | 'blue' | 'seaBlue' | 'yellow' | 'white';
  show?: string;
}

const CampaignPersonaCaptures = ({
  capturesIds,
  dataCapture,
  color,
  show = 'name',
}: Props) => {
  const filter = dataCapture.filter((cus) => {
    if (capturesIds.find((per) => per === cus.uuid)) return true;
    return false;
  });

  if (!filter) return null;

  return (
    <>
      {filter.map((data, index) => {
        const text = show === 'value' ? data.Value : data.Name;
        return <Chip text={text} key={index} color={color} bold />;
      })}
    </>
  );
};

export default CampaignPersonaCaptures;
