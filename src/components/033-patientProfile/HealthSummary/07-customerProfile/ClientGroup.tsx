import type { FC } from 'react';
import React from 'react';

const ClientGroup: FC = () => {
  return (
    <div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col">
          <h3 className="text-sm font-normal text-greyOcare">จัดกลุ่มลูกค้า</h3>
          <div className="mt-3 grid grid-cols-10 gap-x-3 gap-y-2">
            {[...Array(Math.round(56 / 2))].map((i) => {
              return (
                <div className="h-1 w-1 rounded-full bg-blueOcare" key={i} />
              );
            })}

            {[...Array(Math.round(44 / 2))].map((i) => {
              return (
                <div className="h-1 w-1 rounded-full bg-redOcare" key={i} />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center justify-center">
            <p className="text-[10px] text-greyOcare">ชาย</p>
            <p className="text-sm font-semibold text-blueDarkOcare">56%</p>
          </div>

          <span className="h-[1px] w-[59px] bg-greyOcare"></span>

          <div className="flex flex-col items-center justify-center">
            <p className="text-[10px] text-greyOcare">หญิง</p>
            <p className="text-sm font-semibold text-redOcare">44%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientGroup;
