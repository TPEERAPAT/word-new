import Chip from '@components/Chip/Chip';
import useCampaignActivity from 'hooks/api/useCampaignActivity';

interface Props {
  activityId: string;
  handleCount: (count: number) => void;
}

const CampaignActivityItem = ({ activityId, handleCount }: Props) => {
  const { data: activity } = useCampaignActivity(activityId, handleCount);

  if (!activity) return null;

  return <Chip color="white" text={activity.ActivityName} />;
};

export default CampaignActivityItem;
