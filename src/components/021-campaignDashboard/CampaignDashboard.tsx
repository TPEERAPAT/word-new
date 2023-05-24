import HeadSection from '@components/011-healthDashboard/HeadSection';

import Navbar from '../navbar/Navbar';
import CampaignPlanning from './CampaignPlanning';
import { KeywordAnalytics } from './KeywordAnalytics';
import PotentialCampaigns from './PotentialCampaigns';

const CampaignDashboard = () => {
  return (
    <>
      <Navbar activeNav="Clincal Explorer" activeSubNav="Persona Analytics">
        <div className="flex w-full flex-col p-6 pb-[120px]">
          <h1 className="font-bold">Campaign Building Recommendations</h1>
          <div className="mt-2 flex pr-24">
            <HeadSection label="วางแผนแคมเปญ" />
            <HeadSection label="Keyword Analytics" style="ml-[76px] w-5/6" />
          </div>
          <div className="mt-3 flex justify-between p-3">
            <div className="h-[177px] w-[48.5%]">
              <CampaignPlanning />
            </div>
            <div className="flex w-2/4 justify-center">
              <KeywordAnalytics />
            </div>
          </div>
          <div className="h-[412px]">
            <PotentialCampaigns />
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default CampaignDashboard;
