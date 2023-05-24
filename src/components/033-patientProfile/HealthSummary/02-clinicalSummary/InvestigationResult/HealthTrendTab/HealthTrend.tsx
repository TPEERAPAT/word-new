import Card from '@components/Card/Card';
import React from 'react';
import { MdNoFood } from 'react-icons/md';
import { RiHeartPulseFill, RiUserFill } from 'react-icons/ri';
import { TbTestPipe } from 'react-icons/tb';

import ResultChart from './ResultChart';

const HealthTrend = ({ data }: { data: any }) => {
  const UpperChartList = [
    {
      ChartName: 'Heart Rate',
      Icon: <RiHeartPulseFill className="w-[16px] text-greyDarkOcare" />,
      ChartUnit: 'bpm',
      ChartData: null,
    },
    {
      ChartName: 'BMI',
      Icon: <RiUserFill size={15} className="w-[16px] text-greyDarkOcare" />,
      ChartUnit: 'Body mass index',
      ChartData: data.HealthTrend.LineItem[0].LineItem[0].Value,
    },
  ];

  const LowerChartList = [
    {
      ChartName: 'Fasting Blood Sugar',
      Icon: <MdNoFood size={15} className="w-[16px] text-greyDarkOcare" />,
      ChartUnit: 'mg%',
      ChartData: null,
    },
    {
      ChartName: 'HbA1c',
      Icon: <TbTestPipe className="w-[16px] text-greyDarkOcare" />,
      ChartUnit: 'mg%',
      ChartData: null,
    },
  ];

  const UpperChart = () => {
    return (
      <Card color="greySemiLightOcare" className="flex flex-col gap-6 p-3">
        {UpperChartList.map((eachChart, i: number) => (
          <ResultChart
            key={i}
            chartName={eachChart.ChartName}
            chartIcon={eachChart.Icon}
            chartUnit={eachChart.ChartUnit}
            chartData={eachChart.ChartData}
          />
        ))}
      </Card>
    );
  };

  const LowerChart = () => {
    return (
      <Card color="greySemiLightOcare" className="flex flex-col gap-6 p-3">
        {LowerChartList.map((eachChart, i: number) => (
          <ResultChart
            key={i}
            chartName={eachChart.ChartName}
            chartIcon={eachChart.Icon}
            chartUnit={eachChart.ChartUnit}
            chartData={eachChart.ChartData}
          />
        ))}
      </Card>
    );
  };
  return (
    <div className="mt-[18px] flex flex-col gap-[18px]">
      <UpperChart />
      <LowerChart />
    </div>
  );
};

export default HealthTrend;
