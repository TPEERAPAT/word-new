import 'react-svg-map/lib/index.css';

import Card from '@components/Card/Card';
import React from 'react';

import type { provinceData } from '#types/GeographicHealth';

import { GeograpPhase } from './GeograpHealth';

interface ICardInfo {
  hoverProvince: string;
  hoverInfo: { x: number; y: number; display: boolean };
  hoverProvinceData: provinceData | undefined;
}

const CardInfo: React.FC<ICardInfo> = ({
  hoverProvince,
  hoverInfo,
  hoverProvinceData,
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: hoverInfo.x - 170,
        top: hoverInfo.y - 190,
        width: '320px',
        height: 'auto',
        zIndex: '2000',
      }}
    >
      <Card shadow className="w-full place-self-start p-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-sm font-medium ">{hoverProvince}</h1>
            <p className=" mt-1 text-xs text-greyDarkOcare">{hoverProvince}</p>
          </div>
          <div className="ml-2 rounded-lg bg-backgroundOcare px-[11px] py-1">
            <h1 className="text-sm font-medium ">
              {hoverProvinceData ? hoverProvinceData.population.amount : '???'}{' '}
              คน555
            </h1>
            <p className=" mt-1 text-right text-xs text-greyDarkOcare">
              (
              {hoverProvinceData ? hoverProvinceData.population.percent : '???'}
              %)
            </p>
          </div>
        </div>
        <div className="mr-1 mt-8 flex  w-full flex-row justify-between gap-1">
          <GeograpPhase
            color="seaBlueOcare"
            phase="ปกติ"
            w={
              // hoverProvinceData.healthStatus.good.percent
              hoverProvinceData
                ? hoverProvinceData.healthStatus.good.percent
                : 999
            }
            percent={
              // hoverProvinceData.healthStatus.good.percent
              hoverProvinceData
                ? hoverProvinceData.healthStatus.good.percent
                : 999
            }
            amount={
              // hoverProvinceData.healthStatus.good.amount
              hoverProvinceData
                ? hoverProvinceData.healthStatus.good.amount
                : 999
            }
          />
          <GeograpPhase
            color="orangeOcare"
            phase="มีความเสี่ยง"
            w={
              // hoverProvinceData.healthStatus.warn.percent
              hoverProvinceData
                ? hoverProvinceData.healthStatus.warn.percent
                : 999
            }
            percent={
              // hoverProvinceData.healthStatus.warn.percent
              hoverProvinceData
                ? hoverProvinceData.healthStatus.warn.percent
                : 999
            }
            amount={
              // hoverProvinceData.healthStatus.warn.amount
              hoverProvinceData
                ? hoverProvinceData.healthStatus.warn.amount
                : 999
            }
          />
          <GeograpPhase
            color="redOcare"
            phase="มีปัญหา"
            w={
              // hoverProvinceData.healthStatus.dangerous.percent
              hoverProvinceData
                ? hoverProvinceData.healthStatus.dangerous.percent
                : 999
            }
            percent={
              // hoverProvinceData.healthStatus.dangerous.percent
              hoverProvinceData
                ? hoverProvinceData.healthStatus.dangerous.percent
                : 999
            }
            amount={
              // hoverProvinceData.healthStatus.dangerous.amount
              hoverProvinceData
                ? hoverProvinceData.healthStatus.dangerous.amount
                : 999
            }
          />
        </div>
        <span
          className=" absolute bottom-[-9px] left-[47.8%] h-0 w-0"
          style={{
            borderLeft: '9px solid transparent',
            borderRight: '9px solid transparent',
            borderTop: '10px solid #FFF',
          }}
        ></span>
      </Card>
    </div>
  );
};

export default CardInfo;
