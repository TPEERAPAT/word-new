import Navbar from '@components/navbar/Navbar';
import PageHead from '@components/Ui/PageHead';
import React, { useState } from 'react';

import type { Campaign } from '#types/Campaign';

import CampaignList from './CampaignList';
import FormSearch from './FormSearch';

const HealthCampaignLanding = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  return (
    <Navbar activeNav="Clincal Explorer" activeSubNav="Health Campaign">
      <PageHead>
        <div className="flex w-full flex-col">
          <h1 className="mb-[22px] font-bold">Health Campaign</h1>

          <FormSearch setCampaigns={setCampaigns} />
        </div>
      </PageHead>
      {campaigns.map((campaign, index) => {
        return <CampaignList key={index} campaign={campaign} />;
      })}
    </Navbar>
  );
};

export default HealthCampaignLanding;
