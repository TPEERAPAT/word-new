import Button from '@components/Button/Button';
import IconButton from '@components/Button/IconButton';
import Card from '@components/Card/Card';
import Chip from '@components/Chip/Chip';
import DisplayBox from '@components/Ui/DisplayBox';
import type { FC } from 'react';
import React from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { RiUserSearchLine } from 'react-icons/ri';
import { TbPencilMinus } from 'react-icons/tb';

import PeriodPopularity from './PeriodPopularity';
import TargetedCard from './TargetedCard';

const MockPersonaTags = {
  Demographic: [
    {
      Group: 'condition-ncds',
      Name: 'Northern',
      Value: 'normal',
    },
    {
      Group: 'condition-ncds',
      Name: 'Chiang Mai',
      Value: 'normal',
    },
    {
      Group: 'condition-ncds',
      Name: 'Male',
      Value: 'normal',
    },
    {
      Group: 'condition-ncds',
      Name: 'Female',
      Value: 'normal',
    },
  ],
  ClinicalCaptures: [
    {
      Group: 'condition-ncds',
      Name: 'NCDs',
      Value: 'normal',
    },
    {
      Group: 'condition-ncds',
      Name: 'HTN',
      Value: 'normal',
    },
  ],
  HealthConditions: [
    {
      Group: 'condition-ncds',
      Name: 'DM',
      Value: 'normal',
    },
  ],
  VisitLocations: [
    {
      Group: 'condition-ncds',
      Name: 'OBGYN',
      Value: 'normal',
    },
    {
      Group: 'condition-ncds',
      Name: 'ORTHO',
      Value: 'normal',
    },
  ],
};

const PersonaTagChip = (
  <div>
    {MockPersonaTags.Demographic.map((tag: any, i: number) => {
      return (
        <div key={i} className="mr-3 mt-1.5 inline-block">
          <Chip bold text={tag.Name} color="green" />
        </div>
      );
    })}
    {MockPersonaTags.ClinicalCaptures.map((tag: any, i: number) => {
      return (
        <div key={i} className="mr-3 mt-1.5 inline-block">
          <Chip bold text={tag.Name} color="red" />
        </div>
      );
    })}
    {MockPersonaTags.HealthConditions.map((tag: any, i: number) => {
      return (
        <div key={i} className="mr-3 mt-1.5 inline-block">
          <Chip bold text={tag.Name} color="blue" />
        </div>
      );
    })}
    {MockPersonaTags.VisitLocations.map((tag: any, i: number) => {
      return (
        <div key={i} className="mr-3 mt-1.5 inline-block">
          <Chip bold text={tag.Name} color="yellow" />
        </div>
      );
    })}
  </div>
);

interface FocusPersonaCardProps {
  openAddToCampaignModal: () => void;
}

const FocusPersonaCard: FC<FocusPersonaCardProps> = ({
  openAddToCampaignModal,
}) => {
  const PersonaBookmark = (actived: boolean) => {
    return (
      <div
        className={`${
          actived
            ? 'bg-blueOcare hover:bg-blueOcare/70'
            : 'border-solid border-blueOcare hover:bg-blueOcare/10'
        } flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full transition`}
      >
        {actived ? (
          <FaBookmark size={18} className="fill-white" />
        ) : (
          <FaRegBookmark size={18} className="text-blueOcare" />
        )}
      </div>
    );
  };

  return (
    <Card shadow className="max-w-[1146px] p-6">
      {/* head */}
      <div className="mb-6 flex items-center gap-4">
        {/* pass props later in real api */}
        {PersonaBookmark(true)}
        <div>
          <div className="cursor-pointer text-2xl font-medium transition hover:underline active:text-blueOcare/70">
            {`โรคไต`}
          </div>
          <p className="text-sm">Kidney disease</p>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button
            type="outlined"
            bold
            text="Add to Campaign"
            className="max-w-[160px]"
            onClick={openAddToCampaignModal}
          />
          <IconButton
            icon={<RiUserSearchLine className="text-greyOcare" size={18} />}
            onClick={() => /* alert('Developing...') */ 'hello'}
            tooltip="Discover Patients"
          />
          <IconButton
            icon={<TbPencilMinus className="text-greyOcare" size={18} />}
            onClick={() => /* alert('Developing...') */ 'hello'}
            tooltip="Edit Persona"
          />
        </div>
      </div>
      {/* detail */}
      <div className="mb-6 flex gap-6">
        <TargetedCard />
        <PeriodPopularity />
      </div>
      <div className="flex w-full justify-between">
        <DisplayBox
          header="Persona Tag"
          divClassName="inline-block w-full min-w-[260px] align-top mb-3 lg:mb-6 sm:w-1/3"
        >
          {PersonaTagChip}
        </DisplayBox>

        <DisplayBox header="Estimated size" divClassName="min-w-[92px]">
          <p className="font-medium">407 ราย</p>
        </DisplayBox>

        <DisplayBox header="Estimated valuation" divClassName="min-w-[120px]">
          <p className="font-medium">4,213,123 บาท</p>
        </DisplayBox>

        <DisplayBox header="Expense" divClassName="min-w-[250px]">
          <div>
            <p className="font-medium">• Average: 12,256 บาท</p>
            <p className="font-medium">• Range: 2,451 - 42,234 บาท</p>
          </div>
        </DisplayBox>
      </div>
    </Card>
  );
};

export default FocusPersonaCard;
