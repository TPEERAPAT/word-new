import Chip from '@components/Chip/Chip';
import React from 'react';

export const Level2Record = ({ level2Data }: { level2Data: any }) => {
  const columnWidth = {
    item: 'min-w-[240px] max-w-[240px]',
    date: 'min-w-[120px] max-w-[120px]',
  };

  const Level3Record = () => {
    return (
      <div className="max-w-[80vw] overflow-x-auto">
        {/* column name */}
        <div className="mb-[18px] ml-6 mt-3 flex min-h-[21px] gap-[12px] text-sm font-normal text-greyDarkOcare">
          <p className={`${columnWidth.item}`}>{`รายการ`}</p>
          <p className={`${columnWidth.date}`}>{`05 Apr 2023`}</p>
          <p className={`${columnWidth.date}`}>{`04 Apr 2023`}</p>
          <p className={`${columnWidth.date}`}>{`03 Apr 2023`}</p>
        </div>

        {/* colomn data */}
        <div className="flex flex-col gap-3">
          {level2Data.LineItem.map((level3Item: any, i: number) => {
            return (
              <div
                key={i}
                className="mx-3 flex w-fit items-center gap-3 rounded-lg bg-greySemiLightOcare/50 p-3"
              >
                <div className={`${columnWidth.item} gap-[6px]`}>
                  <p className="text-base font-medium">
                    {`${level3Item.Label.EN} (${level3Item.Label.TH})`}
                  </p>
                  <Chip color="white" text={level3Item.Ref} />
                </div>
                {level3Item.LineItem.map((item: any, j: number) => {
                  return (
                    <p
                      key={j}
                      className={`${columnWidth.date} text-base font-normal`}
                    >
                      {item.Value} {item.Unit}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* summary */}
        <div className="mx-3 mt-3 flex h-12 min-w-[660px] items-center gap-3 rounded-lg bg-blueLightOcare px-3">
          <p className="text-base font-semibold text-blueOcare">{`สรุปผล: `}</p>
          <p>{level2Data.summary}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-3 rounded-lg border-[1px] border-solid border-greyBorder py-3">
      <h3 className="px-3 text-base font-semibold">
        {`• ${level2Data.Label.EN} (${level2Data.Label.TH})`}
      </h3>
      <Level3Record />
    </div>
  );
};

const HealthRecord = ({ data }: { data: any }) => {
  const HealthRecordItem = data.HealthRecord.LineItem;

  const HealthRecordDetail =
    HealthRecordItem.length > 0 ? (
      HealthRecordItem.map((level1Item: any, i: number) => {
        return (
          <div key={i} className="mb-6 flex flex-col">
            <h2 className="text-lg font-semibold">
              {`${level1Item.Label.EN} (${level1Item.Label.TH})`}
            </h2>
            {level1Item.LineItem.map((level2Item: any, j: number) => {
              return <Level2Record key={j} level2Data={level2Item} />;
            })}
          </div>
        );
      })
    ) : (
      <p className="mb-3 text-center text-sm">{`patient don't have medication history yet`}</p>
    );

  return (
    <div className="mt-[18px] flex flex-col gap-[18px]">
      {HealthRecordDetail}
      <div className="rounded-lg border-[1px] border-solid border-blueOcare bg-blueLightOcare p-[12px]">
        <h3 className="text-base font-semibold text-blueOcare">
          {`Health Summary`}
        </h3>
        <div className="pl-[3px] text-base font-normal">
          <p>{data.HealthRecord.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default HealthRecord;
