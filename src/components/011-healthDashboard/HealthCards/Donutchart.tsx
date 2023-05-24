import type { ChartOptions } from 'chart.js';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import type { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutchartProps {
  datas: object;
}

export const titleCallback = () => {
  return '';
};

export const labelCallback = (context: any) => {
  let label = context.dataset.label || '';

  if (label) {
    label += ': ';
  }
  label += context.label.name;

  return label;
};

export const footerCallback = (tooltipItem: any) => {
  return `${tooltipItem[0].parsed} คน (${tooltipItem[0].label.percent}%)`;
};

const Donutchart: FC<DonutchartProps> = (datas: any) => {
  const data = {
    // labels: ["green", "blue", "yellow", "red"],
    labels: datas.datas.label,
    datasets: [
      {
        data: datas.datas.data,
        backgroundColor: datas.datas.backgroundColor,
        offset: 10,
        cutout: 24,
      },
    ],
  };

  const options: ChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(235, 236, 237,1)',
        titleColor: '#000',
        bodyColor: '#000',
        footerColor: '#000',
        titleMarginBottom: 2,
        padding: 6,
        bodyFont: {
          size: 10,
          weight: 'bold',
        },
        footerFont: {
          size: 8,
          weight: 'normal',
        },
        callbacks: {
          title: titleCallback,
          label: labelCallback,
          footer: footerCallback,
        },
      },
    },
  };

  return (
    <div className={'h-[72px] w-[72px]'}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Donutchart;
