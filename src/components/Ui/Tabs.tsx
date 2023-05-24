import type { FC, ReactNode } from 'react';
import { useState } from 'react';

interface TabsProps {
  tabList: {
    startIcon?: ReactNode;
    name: string;
    tabContent: ReactNode;
  }[];
}

const Tabs: FC<TabsProps> = ({ tabList }) => {
  const [activeTab, setActiveTab] = useState<string>(
    // @ts-ignore // delete later if you can debug this
    tabList.length > 0 ? tabList[0].name : ''
  );

  return (
    // <div className={className}>
    <>
      {/* tab navigation */}
      <div className="mb-[18px] flex max-w-[100vw] flex-nowrap overflow-x-auto bg-white px-6">
        {tabList.map((tab, index) => (
          <div
            key={index}
            className={`
              flex cursor-pointer items-center gap-3 whitespace-nowrap
              border-[0px] border-b-[1px] border-solid
              px-[18px] py-[6px] text-base transition delay-100 duration-300 ease-in-out
              ${
                activeTab === tab.name
                  ? 'border-blueOcare font-semibold text-blueOcare'
                  : 'border-greyLightOcare font-normal text-greyDarkOcare'
              }
            `}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.startIcon}
            {tab.name}
          </div>
        ))}
      </div>
      {/* tab content */}
      {tabList.find((tab) => tab.name === activeTab)?.tabContent}
    </>
    // </div>
  );
};

export default Tabs;
