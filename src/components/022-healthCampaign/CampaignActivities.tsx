import DisplayBox from '@components/Ui/DisplayBox';
import type { SetStateAction } from 'react';

import CampaignActivityItem from './CampaignActivityItem';

interface Props {
  activityIds: string[];
  setTaskCompletion: (value: SetStateAction<number>) => void;
}

const CampaignActivities = ({ activityIds, setTaskCompletion }: Props) => {
  const handleCount = (count: number) => {
    setTaskCompletion((prevCount: number) => prevCount + count);
  };

  return (
    <DisplayBox header="Activity">
      <div className="mt-1 flex flex-wrap gap-1">
        {activityIds.map((activityId, index) => {
          return (
            <CampaignActivityItem
              activityId={activityId}
              key={index}
              handleCount={handleCount}
            />
          );
        })}
      </div>
    </DisplayBox>
  );
};

export default CampaignActivities;
