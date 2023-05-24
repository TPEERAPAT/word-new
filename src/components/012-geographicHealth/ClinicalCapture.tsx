import Card from '@components/Card/Card';
import type { FC } from 'react';

import { GeograpPhase as Range } from './GeograpHealth';

interface ClinicalCaptureInfoProps {
  notfirst?: boolean;
  nameTH: string;
  nameEN: string;
  data: any;
}
const ClinicalCaptureInfo: FC<ClinicalCaptureInfoProps> = ({
  notfirst = false,
  nameTH,
  nameEN,
  data,
}) => {
  return (
    <div
      className={`flex h-[70px] w-full items-center justify-between rounded bg-backgroundOcare p-4 pr-6 ${
        notfirst ? 'mt-4' : ''
      }`}
    >
      <div className="flex flex-col">
        <h1 className="text-xs font-medium">{nameTH}</h1>
        <p className="mt-1 text-[10px] text-greyDarkOcare">{nameEN}</p>
      </div>
      <div className="flex w-[80%] justify-between gap-1">
        <Range
          color="greenOcare"
          phase="ปกติ"
          w={data.good.percent}
          percent={data.good.percent}
          amount={data.good.amount}
        />
        <Range
          color="orangeOcare"
          phase="มีความเสี่ยง"
          w={data.warn.percent}
          percent={data.warn.percent}
          amount={data.warn.amount}
        />
        <Range
          color="redOcare"
          phase="มีปัญหา"
          w={data.dangerous.percent}
          percent={data.dangerous.percent}
          amount={data.dangerous.amount}
        />
      </div>
    </div>
  );
};

interface ClinicalCaptureProps {
  data: any;
}

const ClinicalCapture: FC<ClinicalCaptureProps> = ({ data }) => {
  return (
    <div>
      <Card shadow className="h-[412px] p-4">
        <p className="font-medium">
          สรุปโรคไม่ติดต่อเรื้อรัง
          <span className="ml-2 text-greyDarkOcare">(Health Conditions)</span>
        </p>
        <div className="mt-5">
          <ClinicalCaptureInfo
            nameEN="Kidney disease"
            nameTH="โรคไต"
            data={data.kidney}
          />
          <ClinicalCaptureInfo
            notfirst
            nameEN="Hyperuricemia"
            nameTH="ยูริคในเลือดสูง"
            data={data.hyperuricemia}
          />
          <ClinicalCaptureInfo
            notfirst
            nameEN="Metabolic syndrome"
            nameTH="ภาวะอ้วนลงพุง"
            data={data.metabolic}
          />
          <ClinicalCaptureInfo
            notfirst
            nameEN="Obesity"
            nameTH="โรคอ้วน"
            data={data.obesity}
          />
        </div>
      </Card>
    </div>
  );
};

export default ClinicalCapture;
