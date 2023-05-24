import { useState } from 'react';
import { IoCaretBackOutline, IoCaretForwardOutline } from 'react-icons/io5';

import type { Provinces } from './Interface/province';

export interface IProvincesDropdown {
  province: string | Provinces;
  onProvinceValueHandler: Function;
  onToggleDistrictHandler: Function;
}

const ProvincesDropdown: React.FC<IProvincesDropdown> = ({
  province,
  onProvinceValueHandler,
  onToggleDistrictHandler,
}) => {
  const [selectData, setSelectData] = useState<boolean>(false);

  let provinceName: string = '';
  let provinceChecked: boolean = false;
  if (typeof province === 'object') {
    //  (${province.NameEN})
    provinceName = `${province.NameTH}`;
    provinceChecked = province.isChecked;
  } else {
    provinceName = province;
  }

  const controlProvinceHandler = (provinceThis: string | Provinces) => {
    onProvinceValueHandler(provinceThis, selectData);
    setSelectData(!selectData);
  };

  return (
    <div
      className={`
        flex cursor-pointer flex-row
        items-center justify-between p-2
      `}
      onClick={() => setSelectData(!selectData)}
    >
      <div
        className="inline-flex w-[90%] items-center py-1"
        onClick={() => controlProvinceHandler(province)}
      >
        <input
          type="checkbox"
          className="h-4 w-4 accent-blueOcare"
          checked={provinceChecked}
          readOnly
        />
        <label className="ml-2 cursor-pointer text-[12px]">
          {provinceName}
        </label>
      </div>
      <div
        onClick={() => onToggleDistrictHandler(!selectData)}
        className="flex items-center"
      >
        {selectData ? (
          <IoCaretBackOutline className="h-4 w-4 fill-greyDarkOcare" />
        ) : (
          <IoCaretForwardOutline className="h-4 w-4 fill-greyDarkOcare" />
        )}
      </div>
    </div>
  );
};

export default ProvincesDropdown;
