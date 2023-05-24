import Card from '@components/Card/Card';
import React from 'react';
import { IoCaretDown } from 'react-icons/io5';

import PotentialInfo from './PotentialInfo';

const Potentialcampaigns = () => {
  const location = {
    green: {
      label: 'กรุงเทพมหานคร',
      width: 80,
      percent: '40',
      amount: '5000',
    },
    orange: {
      label: 'สมุทรปราการ',
      width: 60,
      percent: '35',
      amount: '4500',
    },
    red: {
      label: 'นนทบุรี',
      width: 15,
      percent: '15',
      amount: '2000',
    },
  };

  const popularity = {
    month: {
      gradient: [200, 300, 200, 300, 600, 1, 750, 500, 250, 300, 150, 200],
      amount: [200, 300, 200, 300, 600, 1000, 750, 500, 250, 300, 150, 200],
      percent: [10, 30, 20, 30, 60, 10, 75, 50, 25, 30, 15, 20],
    },
    day: {
      gradient: [500, 400, 200, 200, 300, 400, 1],
      amount: [500, 400, 200, 200, 300, 400, 1000],
      percent: [5, 4, 20, 20, 30, 40, 80],
    },
  };
  return (
    <div className="mr-[51px]">
      <Card shadow className="mx-4 mt-10 w-full p-4 pr-12">
        <p className="text-sm font-medium">
          แคมเปญที่มีศักยภาพ
          <span className="ml-2 text-xs text-greyDarkOcare">
            (Potential campaigns)
          </span>
        </p>

        <div className="ml-[6px] mt-1">
          <div className="flex">
            <div className=" flex items-center">
              <p className="text-[10px]">Campaigns</p>
              <IoCaretDown className="ml-1 fill-greyDarkOcare" />
            </div>
            <div className=" ml-[8%] flex items-center">
              <p className="text-[10px]">Numbers</p>
              <IoCaretDown className="ml-1 fill-greyDarkOcare" />
            </div>
            <div className=" ml-[2.5%] flex items-center">
              <p className="text-[10px]">Valuation</p>
              <IoCaretDown className="ml-1 fill-greyDarkOcare" />
            </div>
            <div className=" ml-[20%] flex items-center">
              <p className="text-[10px]">Targeted Location</p>
            </div>
            <div className=" ml-[24%] flex items-center">
              <p className="text-[10px]">Period Popularity</p>
            </div>
          </div>

          <div className="mt-[6px]">
            <PotentialInfo
              nameTH="โรคไต"
              nameEN="Kidney disease"
              numbers={12000}
              valuation={100000}
              location={location}
              popularity={popularity}
            />
            <PotentialInfo
              nameTH="โรคไต"
              nameEN="Kidney disease"
              numbers={12000}
              valuation={100000}
              location={location}
              popularity={popularity}
              notfirst
            />
            <PotentialInfo
              nameTH="โรคไต"
              nameEN="Kidney disease"
              numbers={12000}
              valuation={100000}
              location={location}
              popularity={popularity}
              notfirst
            />
            <PotentialInfo
              nameTH="โรคไต"
              nameEN="Kidney disease"
              numbers={12000}
              valuation={100000}
              location={location}
              popularity={popularity}
              notfirst
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Potentialcampaigns;
