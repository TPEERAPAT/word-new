import { useState } from 'react';

import type { MainGov } from './Governments/MainGov';

export interface IDistrictDropdown {
  gov: MainGov;
  onMainSectionValueHandler: Function;
}

const SubTwoGov: React.FC<IDistrictDropdown> = ({
  gov,
  onMainSectionValueHandler,
}) => {
  const [selectData, setSelectData] = useState<boolean>(false);

  let nameGov: string = '';
  let govChecked: boolean = false;
  if (typeof gov === 'object') {
    // eslint-disable-next-line unused-imports/no-unused-vars
    nameGov = gov.name;
    govChecked = gov.isChecked;
  }

  const controlMainSectionHandler = (nameGovThis: MainGov) => {
    onMainSectionValueHandler(nameGovThis, selectData);
    setSelectData(!selectData);
  };

  return (
    <div
      className="
        flex cursor-pointer flex-row
        items-center justify-between p-2
      "
      onClick={() => controlMainSectionHandler(gov)}
    >
      <div className="inline-flex w-[90%] items-center py-1">
        <input
          type="checkbox"
          className="h-4 w-4 accent-blueOcare"
          readOnly
          checked={govChecked}
        />
        <label className="ml-2 cursor-pointer text-[12px]">{nameGov}</label>
      </div>
    </div>
  );
};

export default SubTwoGov;
