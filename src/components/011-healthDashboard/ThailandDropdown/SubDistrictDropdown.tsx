import { useState } from 'react';

import type { Provinces } from './Interface/province';

export interface ISubDistrictDropdown {
  subDistrict: string | Provinces;
  onSubDistrictValueHandler: Function;
}

const SubDistrictDropdown: React.FC<ISubDistrictDropdown> = ({
  subDistrict,
  onSubDistrictValueHandler,
}) => {
  const [selectData, setSelectData] = useState<boolean>(false);

  let subDistrictName: string = '';
  let subDistrictChecked: boolean = false;
  if (typeof subDistrict === 'object') {
    //  (${subDistrict.NameEN})
    subDistrictName = `${subDistrict.NameTH}`;
    subDistrictChecked = subDistrict.isChecked;
  } else {
    subDistrictName = subDistrict;
  }

  const controlSubDistrictHandler = (SubdistrictThis: string | Provinces) => {
    onSubDistrictValueHandler(SubdistrictThis, selectData);
    setSelectData(!selectData);
  };

  return (
    <div
      className="
        flex cursor-pointer flex-row
        items-center justify-between p-2
      "
      onClick={() => controlSubDistrictHandler(subDistrict)}
    >
      <div className="inline-flex w-[90%] items-center py-1">
        <input
          type="checkbox"
          className="h-4 w-4 accent-blueOcare"
          checked={subDistrictChecked}
          readOnly
        />
        <label className="ml-2 cursor-pointer text-[12px]">
          {subDistrictName}
        </label>
      </div>
    </div>
  );
};

export default SubDistrictDropdown;
