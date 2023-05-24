import { useState } from 'react';
import { IoCaretBackOutline, IoCaretForwardOutline } from 'react-icons/io5';

import type { Provinces } from './Interface/province';

export interface IDistrictDropdown {
  district: string | Provinces;
  onDistrictValueHandler: Function;
  onToggleSubDistrictHandler: Function;
}

const DistrictDropdown: React.FC<IDistrictDropdown> = ({
  district,
  onDistrictValueHandler,
  onToggleSubDistrictHandler,
}) => {
  const [selectData, setSelectData] = useState<boolean>(false);

  let districtName: string = '';
  let districtChecked: boolean = false;
  if (typeof district === 'object') {
    //  (${district.NameEN})
    districtName = `${district.NameTH}`;
    districtChecked = district.isChecked;
  } else {
    districtName = district;
  }

  const controlDistrictHandler = (districtThis: string | Provinces) => {
    onDistrictValueHandler(districtThis, selectData);
    setSelectData(!selectData);
  };

  return (
    <div
      className="
        flex cursor-pointer flex-row
        items-center justify-between p-2
      "
      onClick={() => setSelectData(!selectData)}
    >
      <div
        className="inline-flex w-[90%] items-center py-1"
        onClick={() => controlDistrictHandler(district)}
      >
        <input
          type="checkbox"
          className="h-4 w-4 accent-blueOcare"
          checked={districtChecked}
          readOnly
        />
        <label className="ml-2 cursor-pointer text-[12px]">
          {districtName}
        </label>
      </div>
      <div
        onClick={() => onToggleSubDistrictHandler(!selectData)}
        className="flex items-center"
      >
        {!selectData ? (
          <IoCaretBackOutline className="h-4 w-4 rotate-180 fill-greyDarkOcare" />
        ) : (
          <IoCaretForwardOutline className="h-4 w-4 rotate-180 fill-greyDarkOcare" />
        )}
      </div>
    </div>
  );
};

export default DistrictDropdown;
