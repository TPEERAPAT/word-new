import { useState } from 'react';
import { IoCaretBackOutline, IoCaretForwardOutline } from 'react-icons/io5';

import type { Region } from './Interface/region';

export interface Name {
  NameTH: string;
  NameEN: string;
}

export interface IRegoinDropdown {
  region: Region;
  onRegionValueHandler: Function;
  onToggleProvinceHandler: Function;
}

const RegionDropdown: React.FC<IRegoinDropdown> = ({
  region,
  onRegionValueHandler,
  onToggleProvinceHandler,
}) => {
  const [selectData, setSelectData] = useState<boolean>(false);

  const controlRegionHandler = (regionThis: Region) => {
    onRegionValueHandler(regionThis, selectData);
    setSelectData(!selectData);
  };

  let regionName: string = '';
  let regionIsChecked: boolean = false;
  if (typeof region === 'object') {
    //  (${region.NameEN})
    regionName = `${region.NameTH}`;
    regionIsChecked = region.isChecked;
  } else {
    regionName = region;
  }

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
        onClick={() => controlRegionHandler(region)}
      >
        <input
          type="checkbox"
          className="h-4 w-4 accent-blueOcare"
          checked={regionIsChecked}
          readOnly
        />
        <label className="ml-2 cursor-pointer text-[12px]">{regionName}</label>
      </div>
      <div
        onClick={() => onToggleProvinceHandler(!selectData)}
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

export default RegionDropdown;
