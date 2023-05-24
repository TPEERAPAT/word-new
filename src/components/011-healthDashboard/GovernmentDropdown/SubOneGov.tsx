import { useState } from 'react';
import { IoCaretBackOutline, IoCaretForwardOutline } from 'react-icons/io5';

import type { SubSectionArray } from './Governments/SubOneGov';

export interface IDistrictDropdown {
  gov: SubSectionArray;
  onMainSectionValueHandler: Function;
  onToggleSubSubHandler: Function;
}

const SubOneGovC: React.FC<IDistrictDropdown> = ({
  gov,
  onMainSectionValueHandler,
  onToggleSubSubHandler,
}) => {
  const [selectData, setSelectData] = useState<boolean>(false);

  let nameGov: string = '';
  let govChecked: boolean = false;
  if (typeof gov === 'object') {
    // eslint-disable-next-line unused-imports/no-unused-vars
    nameGov = gov.name;
    govChecked = gov.isChecked;
  }

  const controlMainSectionHandler = (nameGovThis: SubSectionArray) => {
    onMainSectionValueHandler(nameGovThis, !selectData);
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
        onClick={() => controlMainSectionHandler(gov)}
      >
        <input
          type="checkbox"
          className="h-4 w-4 accent-blueOcare"
          readOnly
          checked={govChecked}
        />
        <label className="ml-2 cursor-pointer text-[12px]">{nameGov}</label>
      </div>
      <div
        className="flex items-center"
        onClick={() => onToggleSubSubHandler(!selectData)}
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

export default SubOneGovC;
