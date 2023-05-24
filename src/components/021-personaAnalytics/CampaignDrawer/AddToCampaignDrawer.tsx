import TagInput from '@components/023-persona/InputPersona/TagInput';
import Button from '@components/Button/Button';
import Chip from '@components/Chip/Chip';
import Drawer, { DrawerHead } from '@components/Drawer/Drawer';
import CheckBox from '@components/Input/CheckBox';
import DateRangeInput from '@components/Input/DateRangeInput';
import SearchInput from '@components/Input/SearchInput';
import { ShowToast } from '@components/Toast/OcareToast';
import type { FC } from 'react';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const MockCampaign = [
  {
    Status: 'In progress',
  },
  {
    Status: 'Completed',
  },
  {
    Status: 'Not Start',
  },
  {
    Status: 'Close',
  },
];

interface AddToCampaignDrawerProps {
  closeModal: () => void;
  isVisible: boolean;
}

const AddToCampaignDrawer: FC<AddToCampaignDrawerProps> = ({
  closeModal,
  isVisible,
}) => {
  const [CampaignInput, setCampaignInput] = useState({
    StartAvailabilityDate: null,
    EndAvailabilityDate: null,
    Statuses: [],
    SearchName: '',
  });

  const [checkedCampaign, setCheckedCampaign] = useState(
    MockCampaign.map(() => false)
  );

  const [isLoading, setIsLoading] = useState(false);

  async function handleConfirm() {
    setIsLoading(true);
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    closeModal();
    ShowToast('success', 'Add to campaign success');
  }

  const AddToCampaignHead = (
    <div className="mb-4 flex">
      <p className={DrawerHead}>Add to Campaign</p>
      <Button
        onClick={() => ShowToast('info', 'developing')}
        type="outlined"
        startIcon={<FaPlus className="text-blueOcare" size={10} />}
        text="New Campaign"
        bold
        className="ml-auto max-w-[150px]"
      />
    </div>
  );

  const lebelStyle = 'flex justify-between items-center px-4 mb-4';
  const column1Style = 'text-sm min-w-[242px]';
  const column2Style = 'text-sm min-w-[143px]';
  const column3Style = 'text-sm min-w-[88px]';

  function StatusColor(statusValue: string) {
    switch (statusValue) {
      case 'In progress':
        return 'text-brigthBlueOcare';
      case 'Completed':
        return 'text-greenOcare';
      case 'Not Start':
        return 'text-greyDarkOcare';
      case 'Close':
        return 'text-redOcare';
      default:
        return 'text-greyDarkOcare';
    }
  }

  const AllCampaign = MockCampaign.map((campaign, i: number) => {
    return (
      <div
        key={i}
        className="mb-4 flex min-h-[48px] items-center justify-between rounded-lg bg-greySemiLightOcare px-4"
      >
        <div className={`${column1Style} flex items-center gap-3`}>
          <CheckBox
            label={`Campaign Name ${i + 1}`}
            checked={checkedCampaign[i] || false}
            onChange={() => {
              const newCheckedCampaign = [...checkedCampaign];
              newCheckedCampaign[i] = !newCheckedCampaign[i];
              setCheckedCampaign(newCheckedCampaign);
            }}
          />
          <Chip color="blue" text={`ID : 0000${i + 1}`} bold />
        </div>

        <p className={`${column2Style} font-normal`}>16 May 23 - 31 Dec 23</p>
        <div className={`${column3Style} ${StatusColor(campaign.Status)}`}>
          • {campaign.Status}
        </div>
      </div>
    );
  });

  return (
    <Drawer
      display={isVisible}
      hideDrawer={closeModal}
      headChildren={AddToCampaignHead}
    >
      {/* Input */}
      <div className="mt-6 flex gap-4">
        <DateRangeInput
          startDate={CampaignInput.StartAvailabilityDate}
          endDate={CampaignInput.EndAvailabilityDate}
          onChange={(startDate, endDate) => {
            setCampaignInput({
              ...CampaignInput,
              StartAvailabilityDate: startDate,
              EndAvailabilityDate: endDate,
            });
          }}
          placeholder="Availability"
          height={48}
        />
        <TagInput placeholder="Status" />
        <SearchInput
          placeholder="Search"
          value={CampaignInput.SearchName}
          onChange={(e) => {
            setCampaignInput({
              ...CampaignInput,
              SearchName: e.target.value,
            });
          }}
        />
      </div>

      {/* Display Campaigns */}
      <div className="mt-6 flex flex-col">
        <div className={lebelStyle}>
          <p className={`${column1Style} text-greyDarkOcare`}>Campaign Name</p>
          <p className={`${column2Style} text-greyDarkOcare`}>Availability</p>
          <p className={`${column3Style} text-greyDarkOcare`}>Status</p>
        </div>
        {AllCampaign}
      </div>

      {/* Bottom button */}
      <div className="mt-auto flex gap-4">
        <Button
          type="outlined"
          text="Cancel"
          bold
          size="full"
          onClick={async () => {
            setTimeout(() => {
              closeModal();
            }, 100);
          }}
        />
        <Button
          text="Confirm"
          bold
          size="full"
          onClick={isLoading ? () => {} : async () => handleConfirm()}
          isLoading={isLoading}
        />
      </div>
    </Drawer>
  );
};

export default AddToCampaignDrawer;
