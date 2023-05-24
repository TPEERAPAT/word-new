/* eslint-disable no-unsafe-optional-chaining */
import Card from '@components/Card/Card';
import type { FC } from 'react';

import type { Gender } from '#types/HealthAnalytics';

interface GenderCardProps {
  data: Gender[];
}

const GenderCard: FC<GenderCardProps> = ({ data }) => {
  let totalPatientCount = 0;
  const dataTotal = data.length;

  for (let i = 0; i < dataTotal; i++) {
    // @ts-ignore
    totalPatientCount += data[i].PatientCount || 0;
  }

  const malePercent = Math.round(
    // @ts-ignore
    (data[0]?.PatientCount / totalPatientCount) * 100
  );
  const femalePercent = Math.round(
    // @ts-ignore
    (data[1]?.PatientCount / totalPatientCount) * 100
  );
  return (
    <>
      <Card color="greyRoundedOcare" className="p-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <p className="font-medium">
              เพศ
              <span className="ml-2 text-greyDarkOcare">(gender)</span>
            </p>
            <div className="mt-3 grid grid-cols-20 gap-y-2">
              {[...Array(24)].map((i, index) => {
                return (
                  <div
                    className="h-1 w-1 rounded-full bg-blueOcare"
                    key={index}
                  />
                );
              })}

              {[...Array(76)].map((i, index) => {
                return (
                  <div
                    className="h-1 w-1 rounded-full bg-redOcare"
                    key={index}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center justify-center">
              <p className="text-[10px] text-greyOcare">ชาย</p>
              <p className="text-[17px] font-semibold text-blueDarkOcare">
                {`${malePercent} %`}
              </p>
              <p className="text-[10px] font-medium">
                {/* @ts-ignore */}
                {`${data[0].PatientCount} คน`}
              </p>
            </div>

            <span className="h-[1px] w-[59px] bg-greyOcare"></span>

            <div className="flex flex-col items-center justify-center">
              <p className="text-[10px] text-greyOcare">หญิง</p>
              <p className="text-[17px] font-semibold text-redOcare">
                {`${femalePercent} %`}
              </p>
              <p className="text-[10px] font-medium">
                {/* @ts-ignore */}
                {`${data[1].PatientCount} คน`}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default GenderCard;
