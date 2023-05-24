import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import type { ReactNode } from 'react';
import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { FaMinus } from 'react-icons/fa';
import { IoCaretDown, IoCaretUp } from 'react-icons/io5';

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  LineController,
  Tooltip
);

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      offset: true,
    },
    y: {
      grid: {
        color: '#A8A7A7',
      },
      border: {
        dash: [10, 10],
        color: 'white',
      },
    },
  },
  interaction: {
    intersect: false,
  },
  fill: false,
  radius: 0,
};

const ResultChart = ({
  chartName,
  chartIcon,
  chartUnit,
  chartData,
}: {
  chartName: string;
  chartIcon: ReactNode;
  chartUnit: string;
  chartData: any;
}) => {
  const chartRef = useRef();

  let ChartToDisplay;
  if (!chartData) {
    ChartToDisplay = (
      <div className="flex justify-center">
        <h2 className="text-base font-thin">????? {chartName}</h2>
      </div>
    );
  } else if (chartData.length === 0) {
    ChartToDisplay = <p style={{ opacity: '0.7' }}>No {chartName} Data</p>;
  } else if (chartData.length > 0) {
    const lastSixData = chartData.slice(-6);
    const labels = lastSixData.map((item: any) => item.DateTime);
    const data = {
      labels,
      datasets: [
        {
          type: 'line' as const,
          label: `${chartName}`,
          data: lastSixData.map((item: any) => item.Value),
          // borderColor: [
          //   "green",
          //   "red",
          //   "orange",
          //   "#198C35",
          //   "red",
          //   "orange",
          // ],
          backgroundColor: [
            '#198C35',
            'red',
            'orange',
            '#198C35',
            'red',
            'orange',
          ],
          borderWidth: 2,
          fill: false,
          pointRadius: 5,
          pointHoverRadius: 8,
          segment: {
            borderColor: 'red',
          },
        },
      ],
    };
    ChartToDisplay = (
      <Line options={options} data={data} width="0" ref={chartRef} />
    );
  }

  const TrendData = {
    Good: (
      <div className="ml-auto flex gap-2">
        <IoCaretDown className="text-greenOcare" />
        <p className="text-sm font-medium">Decreased Trend</p>
      </div>
    ),
    Bad: (
      <div className="ml-auto flex gap-2">
        <IoCaretUp className="text-redOcare" />
        <p className="text-sm font-medium">Increased Trend</p>
      </div>
    ),
    None: (
      <div className="ml-auto flex gap-2">
        <FaMinus className="text-greyOcare" />
        <p className="text-sm font-medium">No Trend</p>
      </div>
    ),
  };

  return (
    <div className="">
      <div className="flex items-center gap-1.5">
        {chartIcon}
        <p className="text-sm font-medium text-greyOcare">{chartName}</p>
      </div>
      <div className="mb-[6px] flex items-center">
        <p className="text-xs font-normal text-greyOcare/50">({chartUnit})</p>
        {chartName === 'BMI' ? TrendData.Bad : null}
        {chartName === 'Heart Rate' ? TrendData.None : null}
        {chartName === 'Fasting Blood Sugar' ? TrendData.Good : null}
        {chartName === 'HbA1c' ? TrendData.Good : null}
      </div>
      {/* <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}> */}
      <div className="">{ChartToDisplay}</div>
    </div>
  );
};

export default ResultChart;
