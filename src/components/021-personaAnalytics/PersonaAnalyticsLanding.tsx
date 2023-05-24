import Navbar from '@components/navbar/Navbar';
import PageHead from '@components/Ui/PageHead';
import React from 'react';
import { RiUserStarLine } from 'react-icons/ri';

import AddToCampaignDrawer from './CampaignDrawer/AddToCampaignDrawer';
import CampaignPlanning from './CampaignPlanning/CampaignPlanning';
import FocusPersonaCard from './FocusdPersona/FocusPersonaCard';
import { KeywordAnalytics } from './KeywordAnalytics';

const MockData = [1, 2, 3];

const PersonaAnalyticsLanding = () => {
  const [addToCampaignModal, setAddToCampaignModal] = React.useState(false);

  return (
    <>
      {addToCampaignModal ? (
        <AddToCampaignDrawer
          closeModal={() => setAddToCampaignModal(false)}
          isVisible={addToCampaignModal}
        />
      ) : null}
      <Navbar activeNav="Clincal Explorer" activeSubNav="Persona Analytics">
        <div className={`${addToCampaignModal ? 'fixed' : null}`}>
          <PageHead title="Persona Analytics" />
          <div className="flex flex-col p-3 lg:p-6">
            <div className="flex w-full gap-6">
              <CampaignPlanning />
              <KeywordAnalytics />
            </div>

            <div className="my-6 flex items-center gap-2">
              <RiUserStarLine className="text-greyOcare" />
              <p className="text-sm font-semibold">กลุ่มข้อมูลที่แนะนำ</p>
              <p className="text-sm font-normal text-greyDarkOcare">{`(Focused Personas)`}</p>
            </div>
            <div className="flex flex-col gap-6">
              {MockData.map((data, i: number) => {
                return (
                  <FocusPersonaCard
                    key={i}
                    openAddToCampaignModal={() => setAddToCampaignModal(true)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default PersonaAnalyticsLanding;
