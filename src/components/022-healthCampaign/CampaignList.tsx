import BarGraph from '@components/011-healthDashboard/BarGraph';
import Button from '@components/Button/Button';
import IconButton from '@components/Button/IconButton';
import Card from '@components/Card/Card';
import Chip from '@components/Chip/Chip';
import DisplayBox from '@components/Ui/DisplayBox';
import { differenceInDays, format } from 'date-fns';
import { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

import type { Campaign } from '#types/Campaign';

import CampaignActivities from './CampaignActivities';
import CampaignPersona from './CampaignPersona';
import CampaignTag from './CampaignTag';
import CampaignTeam from './CampaignTeam';

interface Props {
  campaign: Campaign;
}

const StatusColor = (statusValue: string) => {
  switch (statusValue) {
    case 'in-progress':
      return 'text-brigthBlueOcare';
    case 'not-start':
      return 'text-greyDarkOcare';
    default:
      return 'text-greenOcare';
  }
};

const CampaignList = ({ campaign }: Props) => {
  const [taskCompletion, setTaskCompletion] = useState(0);
  const [estimatedSize, setEstimatedSize] = useState<number>(0);
  const [estimatedValuation, setEstimatedValuation] = useState<number>(0);

  const dateDiff = differenceInDays(
    new Date(campaign.EndAvailabilityDate),
    new Date(campaign.StartAvailabilityDate)
  );

  return (
    <Card shadow className="m-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <span className="text-2xl">{campaign.CampaignName}</span>
            <span className="block text-sm">
              {format(new Date(campaign.StartAvailabilityDate), 'dd MMM yy')} -
              {format(new Date(campaign.EndAvailabilityDate), 'dd MMM yy')} (
              {dateDiff.toLocaleString()} days left)
            </span>
          </div>
          <Chip color="blue" text={`ID : ${campaign.uuid}`} bold />
        </div>
        <div className="flex items-center gap-2">
          <div className={`${StatusColor(campaign.Progress)} font-bold `}>
            • {campaign.Progress}
          </div>
          <div className="mx-3 h-6 w-[1px] rounded bg-greyBorder" />
          <div className="w-[200px]">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-bold text-blueOcare">
                Completion
              </span>
              <span className="text-xs font-bold text-blueOcare">
                {Math.floor(taskCompletion / campaign.ActivityIDs.length)}%
              </span>
            </div>
            <BarGraph
              orentation="horizontal"
              amount={0}
              percent={Math.floor(taskCompletion / campaign.ActivityIDs.length)}
              label=""
              color="blueOcare"
              showTooltip={false}
            />
          </div>
        </div>
      </div>
      <div className="my-4 h-[1px] w-full bg-greyBorder" />
      <div className="grid grid-cols-3 gap-6">
        {campaign.PersonaIDs.map((persona, index) => {
          return (
            <Card key={index}>
              <CampaignPersona
                personaId={persona}
                setEstimatedSize={setEstimatedSize}
                setEstimatedValuation={setEstimatedValuation}
              />
            </Card>
          );
        })}
      </div>
      <div className="grid grid-cols-6 gap-2 py-6">
        <CampaignTag tagIds={campaign.CampaignTagIDs} />
        <CampaignTeam teamIds={campaign.UserIDs} />

        <DisplayBox header="Goal">
          <ul className="list-inside text-sm">
            <li>
              {`Estimated size: ${(
                estimatedSize / campaign.PersonaIDs.length
              ).toLocaleString()}`}
            </li>
            <li>{`Estimated Valuation: ${estimatedValuation.toLocaleString()}`}</li>
            <li>Average Expense:</li>
          </ul>
        </DisplayBox>
        <CampaignActivities
          activityIds={campaign.ActivityIDs}
          setTaskCompletion={setTaskCompletion}
        />
        <DisplayBox header="Budget">
          <span className="text-sm">{campaign.Budget.toLocaleString()}</span>
        </DisplayBox>
        <div className="flex items-center">
          <Button text="About Campaign" size="lg" bold />
          <IconButton
            icon={<RiDeleteBin5Line className="h-6 w-6 text-redTextOcare" />}
            className="ml-4 cursor-pointer rounded-xl border border-solid border-redOcare p-2"
            onClick={() => {}}
          />
        </div>
      </div>
    </Card>
  );
};

export default CampaignList;
