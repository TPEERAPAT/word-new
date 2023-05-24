import 'react-svg-map/lib/index.css';

import GovernmentDropdown from '@components/011-healthDashboard/GovernmentDropdown/GovernmentDropdown';
import HealthStatusCard from '@components/011-healthDashboard/HealthCards/HealthStatusCard';
import Status from '@components/011-healthDashboard/HealthCards/Status';
import ThailandDropdown from '@components/011-healthDashboard/ThailandDropdown/ThailandDropdown';
import type { FC } from 'react';
import React, { useState } from 'react';

import type { provinceData } from '#types/GeographicHealth';

import Navbar from '../navbar/Navbar';
import CardInfo from './CardInfo';
import ClinicalCapture from './ClinicalCapture';
import mockData from './MockData/mockData';
import ProvinceGroup from './ProvinceGroup';
import ThailandMap from './ThailandMap';
import TotalPopulation from './TotalPopulation';

interface GeograpPhaseProps {
  color: string;
  phase: string;
  w: number;
  amount: number;
  percent: number;
}
export const GeograpPhase: FC<GeograpPhaseProps> = ({
  color,
  phase,
  w,
  percent,
  amount,
}) => {
  return (
    <div className={`flex flex-col items-center`} style={{ width: `${w}%` }}>
      <Status
        color={color}
        percent={percent}
        amount={amount.toString()}
        status={`${phase}`}
        left={-20}
      />
      <p className=" mt-2 text-xs font-bold">{amount.toLocaleString()} คน</p>
      <p className=" text-xs text-greyDarkOcare ">{phase}</p>
    </div>
  );
};

interface PeopleTabColor {
  amount: string;
  color: string;
}

const peopleTabColor: PeopleTabColor[] = [
  { amount: '1-500 คน', color: 'seaBlueLightOcare' },
  { amount: '501-1,000 คน', color: 'blueLightOcare' },
  { amount: '1,001-1,500 คน', color: 'seaBlueOcare' },
  { amount: '1,501-2,000 คน', color: 'blueOcare' },
  { amount: '2001 คนขึ้นไป', color: 'blueDarkOcare' },
];

export const PeopleTab: FC<PeopleTabColor> = ({ amount, color }) => {
  const [filterTab, setFilterTab] = useState<boolean>(false);

  const onHoverHandler = () => {
    setFilterTab(true);
  };

  const outHoverHandler = () => {
    setFilterTab(false);
  };

  const BackgroundColor = `bg-${color}`;

  return (
    <div
      onMouseEnter={onHoverHandler}
      onMouseLeave={outHoverHandler}
      className={`${filterTab ? 'opacity-0' : 'opacity-40'}`}
    >
      <div className="mb-5 flex cursor-pointer items-center justify-between">
        <div className="flex items-center">
          <span className={`h-5 w-5 rounded-[5px] ${BackgroundColor}`}></span>
          <p className="ml-[10px] text-[12px] font-medium">{amount}</p>
        </div>
      </div>
    </div>
  );
};

interface GeograpHealthProps {
  thirdParty?: boolean;
}

const GeograpHealth: FC<GeograpHealthProps> = ({ thirdParty }) => {
  const [boxHealthHover, setBoxHealthHover] = useState<boolean>(true);

  const setSelectedProvinces = useState<string[]>([
    'Bangkok',
    'Nonthaburi',
    'Samut Prakan',
    'Samut Sakhon',
    'Samut Songkhram',
  ]);
  const [province, setprovince] = useState<string[]>([]);
  const [hoverProvince, setHoverProvince] = useState<string>('');
  // const [hoverProvinceData, setHoverProvinceData] = useState<provinceData>(
  //   mockData[0]
  // );
  const [hoverProvinceData, setHoverProvinceData] = useState(mockData[0]);
  const [hoverInfo, setHoverInfo] = useState({
    x: 0,
    y: 0,
    display: false,
  });

  const calculateHealthStatus = () => {
    const result = {
      dangerous: {
        amount: 0,
        percent: 0,
      },
      warn: {
        amount: 0,
        percent: 0,
      },
      good: {
        amount: 0,
        percent: 0,
      },
    };

    mockData.forEach((data: provinceData) => {
      result.dangerous.amount += data.healthStatus.dangerous.amount;
      result.warn.amount += data.healthStatus.warn.amount;
      result.good.amount += data.healthStatus.good.amount;
    });

    result.dangerous.percent = Math.floor(
      (result.dangerous.amount /
        (result.dangerous.amount + result.warn.amount + result.good.amount)) *
        100
    );
    result.warn.percent = Math.floor(
      (result.warn.amount /
        (result.dangerous.amount + result.warn.amount + result.good.amount)) *
        100
    );
    result.good.percent = Math.floor(
      (result.good.amount /
        (result.dangerous.amount + result.warn.amount + result.good.amount)) *
        100
    );

    return result;
  };

  const calculateClinicalCaptures = () => {
    interface ThreeGroupType {
      good: {
        amount: number;
        percent: number;
      };
      warn: {
        amount: number;
        percent: number;
      };
      dangerous: {
        amount: number;
        percent: number;
      };
    }

    interface ResultType {
      kidney: ThreeGroupType;
      hyperuricemia: ThreeGroupType;
      metabolic: ThreeGroupType;
      obesity: ThreeGroupType;
    }

    const result: ResultType = {
      kidney: {
        good: {
          amount: 0,
          percent: 0,
        },
        warn: {
          amount: 0,
          percent: 0,
        },
        dangerous: {
          amount: 0,
          percent: 0,
        },
      },
      hyperuricemia: {
        good: {
          amount: 0,
          percent: 0,
        },
        warn: {
          amount: 0,
          percent: 0,
        },
        dangerous: {
          amount: 0,
          percent: 17,
        },
      },
      metabolic: {
        good: {
          amount: 0,
          percent: 0,
        },
        warn: {
          amount: 0,
          percent: 0,
        },
        dangerous: {
          amount: 0,
          percent: 0,
        },
      },
      obesity: {
        good: {
          amount: 0,
          percent: 0,
        },
        warn: {
          amount: 0,
          percent: 0,
        },
        dangerous: {
          amount: 0,
          percent: 0,
        },
      },
    };

    mockData.forEach((data: provinceData) => {
      for (let i = 0; i < Object.keys(result).length; i++) {
        const key = Object.keys(result)[i] as keyof ResultType;
        result[key].dangerous.amount += data[key].dangerous.amount;
        result[key].warn.amount += data[key].warn.amount;
        result[key].good.amount += data[key].good.amount;
      }
    });

    for (let i = 0; i < Object.keys(result).length; i++) {
      const key = Object.keys(result)[i] as keyof ResultType;
      result[key].dangerous.percent = Math.floor(
        (result[key].dangerous.amount /
          (result[key].dangerous.amount +
            result[key].warn.amount +
            result[key].good.amount)) *
          100
      );
      result[key].warn.percent = Math.floor(
        (result[key].warn.amount /
          (result[key].dangerous.amount +
            result[key].warn.amount +
            result[key].good.amount)) *
          100
      );
      result[key].good.percent = Math.floor(
        (result[key].good.amount /
          (result[key].dangerous.amount +
            result[key].warn.amount +
            result[key].good.amount)) *
          100
      );
    }

    return result;
  };

  const handleChange = (e: any) => {
    // TODO: fix this function to handle change in search bar
    const { value } = e.target;
    if (!e.target.checked) {
      setprovince((_data) => {
        return province.filter((event) => event !== value);
      });
    } else if (value) {
      setprovince((data) => {
        return [...data, value];
      });
    }
  };

  const handleSubmit = (event: any) => {
    // TODO: fix this function to handle change in search bar
    event.preventDefault();
    setSelectedProvinces[1](province);
  };

  const [fixedScreenT, setFixScreenT] = useState<boolean>(false);
  const [fixedScreenG, setFixScreenF] = useState<boolean>(false);
  const fixedScreenTHandler = (status: boolean) => {
    setFixScreenT(status);
  };

  const fixedScreenFHandler = (status: boolean) => {
    setFixScreenF(status);
  };

  const boxHoverValueHandler = (status: boolean) => {
    setBoxHealthHover(status);
  };

  const hoverInfoHandler = (positionValue: {
    x: number;
    y: number;
    display: boolean;
  }) => {
    setHoverInfo(positionValue);
  };

  const hoverProvinceDataHandler = (data: provinceData | undefined) => {
    setHoverProvinceData(data);
  };

  const hoverProvinceValueHandler = (provinceValue: string) => {
    setHoverProvince(provinceValue);
  };

  return (
    <>
      <div className={`${(fixedScreenT || fixedScreenG) && 'fixed w-[99%]'}`}>
        <Navbar
          activeNav="Health Atlas"
          activeSubNav="Geographic Dashboard"
          disable={thirdParty}
        >
          <div className="flex w-full flex-col p-6">
            <h1 className="mb-[22px] font-bold">Geographic Analytics</h1>
            <form
              className="flex h-auto max-w-[100%] flex-col justify-center gap-4 md:flex-row md:justify-between lg:justify-start xl:flex-row xl:justify-start"
              onChange={handleChange}
              onSubmit={(e) => handleSubmit(e)}
            >
              {/* Province dropdown */}
              <ThailandDropdown onFixedScreen={fixedScreenTHandler} />

              {/* Main center dropdown */}
              <GovernmentDropdown onFixedScreen={fixedScreenFHandler} />
              {/* <ButtonMain /> */}

              {/* Main center dropdown */}
              {/* <ButtonSub /> */}

              {/* Submit button */}
              {/* <ButtonSubmit /> */}
            </form>
            <div className="mt-[1.5em] flex flex-col md:flex-col lg:flex-row xl:flex-row">
              <div className="flex h-[688px] w-[374px] max-w-[100vw]">
                {/* <div className='border border-solid w-10 h-10 absolute top-[500px]'></div> */}
                <div className="absolute top-[500px] hidden md:hidden lg:block xl:block">
                  {peopleTabColor.map((tab, index) => (
                    <PeopleTab
                      key={index}
                      amount={tab.amount}
                      color={tab.color}
                    />
                  ))}
                </div>
                <ThailandMap
                  onBoxHealthHover={boxHoverValueHandler}
                  onHoverInfo={hoverInfoHandler}
                  onHoverProvinceData={hoverProvinceDataHandler}
                  onHoverProvince={hoverProvinceValueHandler}
                />

                {/* Tooltips */}
                {hoverInfo.display && (
                  <CardInfo
                    hoverProvince={hoverProvince}
                    hoverInfo={hoverInfo}
                    hoverProvinceData={hoverProvinceData}
                  />
                )}
              </div>

              <div
                className={`
                  relative
                  w-0
                  sm:w-0
                  md:w-0
                  lg:w-[350px]
                  xl:w-[350px]
                  ${boxHealthHover ? 'opacity-0' : 'opacity-50'}
                `}
              >
                <div className="absolute bottom-0 right-10 flex h-[250px] w-full flex-col rounded-[15px] bg-white p-4 md:left-[15em] lg:left-10 xl:right-10">
                  <p className="text-center text-[12px] font-semibold">
                    ภาวะสุขภาพแยกตามจังหวัด
                  </p>
                  <hr className="my-[10px] opacity-40" />
                  <div className="overflow-y-auto pr-[15px]">
                    <ProvinceGroup />
                  </div>
                </div>
              </div>

              <div className="flex h-auto w-full flex-col">
                <TotalPopulation data={mockData} />
                <div className="mt-8">
                  <HealthStatusCard
                    contentAxisX={true}
                    data={calculateHealthStatus()}
                  />
                </div>
                <div className="mt-8">
                  <ClinicalCapture data={calculateClinicalCaptures()} />
                </div>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default GeograpHealth;
