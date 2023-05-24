import ButtonDropdown from '@components/011-healthDashboard/Button/ButtonDropdown';
import type { ChangeEvent } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { IoCaretDown, IoCaretUp } from 'react-icons/io5';
import { RxMagnifyingGlass } from 'react-icons/rx';

import type { MainGov } from './Governments/MainGov';
import mainGov from './Governments/MainGov';
import type { ISubSection, SubSectionArray } from './Governments/SubOneGov';
import subOneGov from './Governments/SubOneGov';
import subTwoGov from './Governments/SubTwoGov';
import MainGovDropdown from './MainGovDropdown';
import SubOneGovC from './SubOneGov';
import SubTwoGov from './SubTwoGov';

interface IGovernmentDropdown {
  onFixedScreen: (status: boolean) => void;
}

const GovernmentDropdown: React.FC<IGovernmentDropdown> = ({
  onFixedScreen,
}) => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [toggleMainDropdown, setToggleMainDropdown] = useState<boolean>(false);
  const [toggleSubDropdown, setToggleSubDropdown] = useState<boolean>(false);

  const [sectionValue, setSectionValue] = useState<MainGov>({
    name: '',
    id: 0,
    isChecked: false,
  });

  const [subSectionValue, setSubSectionValue] = useState<MainGov>({
    name: '',
    id: 0,
    isChecked: false,
  });

  const setSubSubSectionValue = useState<MainGov>({
    name: '',
    id: 0,
    isChecked: false,
  });

  const [mainSearched, setMainSearched] = useState<string>('');
  const [subSearched, setSubSearched] = useState<string>('');
  const [subSubSearched, setSubSubSearched] = useState<string>('');

  const [mainValueSelected, setMainValueSelected] = useState<number[]>([]);
  const [subValueSelected, setSubValueSelected] = useState<number[]>([]);
  const [subSubValueSelected, setSubSubValueSelected] = useState<number[]>([]);

  const [mainUpdatedStatus, setMainUpdatedStatus] = useState<MainGov[]>([]);
  const [subUpdatedStatus, setSubUpdatedStatus] = useState<ISubSection[]>([]);
  const [subSubUpdatedStatus, setSubSubUpdatedStatus] = useState<ISubSection[]>(
    []
  );

  const [allMainChecked, setAllMainChecked] = useState<boolean>(false);
  const [allSubSelectChecked, setAllSubSelectChecked] =
    useState<boolean>(false);
  const [allSubSubSelectChecked, setAllSubSubSelectChecked] =
    useState<boolean>(false);

  const keySearch: string[] = ['name'];

  const mainSelected: MainGov[] | ISubSection[] =
    mainUpdatedStatus.length > 0 ? mainUpdatedStatus : mainGov;

  const sectionSelected: ISubSection | undefined = (
    subUpdatedStatus.length > 0 ? subUpdatedStatus : subOneGov
  ).filter((sc) => sc.id === sectionValue.id)[0];

  const subSectionSelected: ISubSection | undefined = (
    subSubUpdatedStatus.length > 0 ? subSubUpdatedStatus : subTwoGov
  ).filter((sc) => sc.id === subSectionValue.id)[0];

  const mainSectionValueHandler = (
    mainSection: MainGov,
    addStatus: boolean
  ) => {
    setToggleMainDropdown(!addStatus);
    // setAllSubSelectChecked(false);

    setToggleSubDropdown(false);

    const secSelected: MainGov[] =
      mainUpdatedStatus.length > 0 ? mainUpdatedStatus : mainGov;

    const updateIsCheckSection: MainGov = {
      ...mainSection,
      isChecked: !addStatus,
    };

    const mainIsCheckedUpdate: (MainGov | ISubSection)[] = secSelected.map(
      (latestIsChecked) =>
        latestIsChecked === mainSection ? updateIsCheckSection : latestIsChecked
    );

    setMainUpdatedStatus(mainIsCheckedUpdate as MainGov[]);

    if (!addStatus) {
      setMainValueSelected((prevSec) => {
        return [...prevSec, mainSection.id];
      });
    } else {
      setMainValueSelected(() => {
        return mainValueSelected.filter(
          (prevSec) => prevSec !== mainSection.id
        );
      });

      const subFiltered: ISubSection[] = subUpdatedStatus.filter(
        (prevSec) => prevSec.id === mainSection.id
      );
      const subSelectMain = subFiltered[0]?.subSections as SubSectionArray[];
      subSelectMain?.forEach((item: SubSectionArray) => {
        // eslint-disable-next-line no-param-reassign
        item.isChecked = false;
      });

      const updateRemoveSub: ISubSection[] = subUpdatedStatus.map(
        (latestIsChecked: any) =>
          latestIsChecked === subFiltered ? subSelectMain : latestIsChecked
      );
      setSubUpdatedStatus(updateRemoveSub);

      const subSubFiltered: ISubSection[] = subSubUpdatedStatus.filter(
        (prevSec) => prevSec.id === subSectionValue.id
      );

      const subSubSelectSub = subSubFiltered[0]
        ?.subSections as SubSectionArray[];
      subSubSelectSub?.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.isChecked = false;
      });

      const updateRemoveSubSub: ISubSection[] = subSubUpdatedStatus.map(
        (latestIsChecked: any) =>
          latestIsChecked === subSubFiltered ? subSubSelectSub : latestIsChecked
      );
      setSubSubUpdatedStatus(updateRemoveSubSub);

      setToggleSubDropdown(false);
    }

    setSectionValue(mainSection);
  };

  const subSectionValueHandler = (subSection: MainGov, addStatus: boolean) => {
    setToggleSubDropdown(!addStatus);
    // setAllSubSubSelectChecked(false);

    const secSelected: ISubSection[] =
      subUpdatedStatus.length > 0 ? subUpdatedStatus : subOneGov;

    const mainWasSelected = secSelected.filter((subsInMain: ISubSection) =>
      subsInMain.subSections.includes(subSection)
    );

    const prevSubSelected = mainWasSelected[0]
      ?.subSections as SubSectionArray[];
    const indexSub: number = prevSubSelected.indexOf(subSection);
    const subIsSelected = prevSubSelected[indexSub] as SubSectionArray;

    const updateIsCheckSub: SubSectionArray = {
      ...subIsSelected,
      isChecked: !addStatus,
    };

    const subIsCheckedUpdated: SubSectionArray[] = prevSubSelected.map(
      (latestIsChecked) =>
        latestIsChecked === subIsSelected ? updateIsCheckSub : latestIsChecked
    );

    const updateAllSubs = {
      ...mainWasSelected[0],
      subSections: subIsCheckedUpdated,
    };

    const updateSecSelected = secSelected.map((latestIsChecked) =>
      latestIsChecked === mainWasSelected[0] ? updateAllSubs : latestIsChecked
    ) as ISubSection[];

    setSubUpdatedStatus(updateSecSelected);

    if (!addStatus) {
      setSubValueSelected((prevSec) => {
        return [...prevSec, subSection.id];
      });
    } else {
      setSubValueSelected(() => {
        return subValueSelected.filter((prevSub) => prevSub !== subSection.id);
      });

      const subSubFiltered: ISubSection[] = subSubUpdatedStatus.filter(
        (prevSec) => prevSec.id === subSectionValue.id
      );

      const subSubSelectSub = subSubFiltered[0]
        ?.subSections as SubSectionArray[];
      subSubSelectSub?.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.isChecked = false;
      });

      const updateRemoveSubSub: ISubSection[] = subSubUpdatedStatus.map(
        (latestIsChecked: any) =>
          latestIsChecked === subSubFiltered ? subSubSelectSub : latestIsChecked
      );
      setSubSubUpdatedStatus(updateRemoveSubSub);
    }

    setSubSectionValue(subSection);
  };

  const subSubmainSectionValueHandler = (
    subSubSection: MainGov,
    addStatus: boolean
  ) => {
    const secSelected: MainGov[] | ISubSection[] =
      subSubUpdatedStatus.length > 0 ? subSubUpdatedStatus : subTwoGov;

    const subWasSelected = secSelected.filter((subSubsInSub) =>
      subSubsInSub.subSections.includes(subSubSection)
    );

    const prevSubSubSelected = subWasSelected[0]
      ?.subSections as SubSectionArray[];
    const indexSubSub: number = prevSubSubSelected.indexOf(subSubSection);
    const subSubIsSelected = prevSubSubSelected[indexSubSub] as SubSectionArray;

    const updateIsCheckSubSub: SubSectionArray = {
      ...subSubIsSelected,
      isChecked: !addStatus,
    };

    const subSubIsCheckedUpdated: SubSectionArray[] = prevSubSubSelected.map(
      (latestIsChecked) =>
        latestIsChecked === subSubIsSelected
          ? updateIsCheckSubSub
          : latestIsChecked
    );

    const updateAllSubs = {
      ...subWasSelected[0],
      subSections: subSubIsCheckedUpdated,
    };

    const updateSecSelected = secSelected.map((latestIsChecked) =>
      latestIsChecked === subWasSelected[0] ? updateAllSubs : latestIsChecked
    ) as ISubSection[];

    setSubSubUpdatedStatus(updateSecSelected);

    if (!addStatus) {
      setSubSubValueSelected((prevSec) => {
        return [...prevSec, subSubSection.id];
      });
    } else {
      setSubSubValueSelected(() => {
        return subSubValueSelected.filter(
          (prevSubSub) => prevSubSub !== subSubSection.id
        );
      });
    }

    setSubSubSectionValue[1](subSubSection);
  };

  const allMainValueHandler = () => {
    setAllMainChecked(!allMainChecked);
    // eslint-disable-next-line no-return-assign, no-param-reassign
    mainGov.forEach((sc) => (sc.isChecked = !allMainChecked));
  };

  const allSubSectionValueHandler = () => {
    const secSelected: ISubSection[] =
      subUpdatedStatus.length > 0 ? subUpdatedStatus : subOneGov;

    const initialSelectedSubSectionsInMain: ISubSection[] = secSelected.filter(
      (sc) => sc.id === sectionValue.id
    );

    const currentSec: ISubSection | undefined =
      initialSelectedSubSectionsInMain[0];
    setAllSubSelectChecked(!currentSec!.selectAll);

    const mainSelectedAllSubSectionStatus: boolean | undefined =
      initialSelectedSubSectionsInMain[0]?.selectAll;
    const { subSections } = initialSelectedSubSectionsInMain[0]!;

    const statusChecked: boolean = !mainSelectedAllSubSectionStatus;

    // eslint-disable-next-line no-return-assign, no-param-reassign
    subSections.forEach((ss) => (ss.isChecked = statusChecked));
    const updateSecChecked: ISubSection = {
      ...initialSelectedSubSectionsInMain[0]!,
      subSections,
      selectAll: statusChecked,
    };
    const updateIsCheckedSubSectionInMain: ISubSection[] = secSelected.map(
      (latestIsChecked) =>
        latestIsChecked === initialSelectedSubSectionsInMain[0]
          ? updateSecChecked
          : latestIsChecked
    );

    setSubUpdatedStatus(updateIsCheckedSubSectionInMain);
  };

  const allSubSubSectionValueHandler = () => {
    const secSelected: ISubSection[] =
      subSubUpdatedStatus.length > 0 ? subSubUpdatedStatus : subTwoGov;

    const initialSelectedSubSubSectionInSubSection: ISubSection[] =
      secSelected.filter((sc) => sc.id === subSectionValue.id);

    const currentSec: ISubSection | undefined =
      initialSelectedSubSubSectionInSubSection[0];
    setAllSubSubSelectChecked(!currentSec!.selectAll);

    const SubSectionAllSubSubSectionStatus: boolean | undefined =
      initialSelectedSubSubSectionInSubSection[0]?.selectAll;
    const { subSections } =
      initialSelectedSubSubSectionInSubSection[0] as ISubSection;

    const statusChecked: boolean = !SubSectionAllSubSubSectionStatus;

    // eslint-disable-next-line no-return-assign, no-param-reassign
    subSections.forEach((ss) => (ss.isChecked = statusChecked));
    const updateSecChecked = {
      ...initialSelectedSubSubSectionInSubSection[0],
      subSections,
      selectAll: statusChecked,
    } as ISubSection;
    const updateIsCheckedSubSubSectionInSubSection: ISubSection[] =
      secSelected.map((latestIsChecked) =>
        latestIsChecked === initialSelectedSubSubSectionInSubSection[0]
          ? updateSecChecked
          : latestIsChecked
      );

    setSubSubUpdatedStatus(updateIsCheckedSubSubSectionInSubSection);
  };

  useEffect(() => {
    const updateSectionsSelected: number[] = mainUpdatedStatus
      .filter((sc) => sc.isChecked)
      .map((sc) => sc.id);
    setMainValueSelected(updateSectionsSelected);
  }, [mainUpdatedStatus]);

  useEffect(() => {
    const updateSubSectionSelected: number[] = subUpdatedStatus
      .flatMap((ssc) =>
        ssc.subSections.filter((sc: SubSectionArray) => sc.isChecked)
      )
      .map((sc) => sc.id);
    setSubValueSelected(updateSubSectionSelected);
  }, [subUpdatedStatus]);

  useEffect(() => {
    const updatedSubSubSectionSelected: number[] = subSubUpdatedStatus
      .flatMap((ssc) =>
        ssc.subSections.filter((sc: SubSectionArray) => sc.isChecked)
      )
      .map((sc) => sc.id);
    setSubSubValueSelected(updatedSubSubSectionSelected);
  }, [subSubUpdatedStatus]);

  const toggleSubHandler = (hideStatus: boolean) => {
    setToggleMainDropdown(hideStatus);
  };

  const toggleSubSubHandler = (hideStatus: boolean) => {
    setToggleSubDropdown(hideStatus);
  };

  const changeMainHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMainSearched(event.target.value);
  };

  const changeSubHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSubSearched(event.target.value);
  };

  const changeSubSubHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSubSubSearched(event.target.value);
  };

  const sectionSelectedSearchedHandler = (
    sectionName: MainGov[] | SubSectionArray[],
    sectionSearching: string
  ) => {
    return sectionName.filter((section: any) => {
      return keySearch.some((searchSections) => {
        return (
          section[searchSections]
            .toString()
            .toLowerCase()
            .indexOf(sectionSearching.toLowerCase()) > -1
        );
      });
    });
  };

  const toggleDropdownHandler = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const defaultValueHandler = () => {
    if (subSubValueSelected.length > 0) {
      const secSelected: ISubSection[] =
        subSubUpdatedStatus.length > 0 ? subSubUpdatedStatus : subTwoGov;

      const initialSelectedSubSubSectionInSubSection: ISubSection[] =
        secSelected.filter((sc) => sc.id === subSectionValue.id);

      setAllSubSubSelectChecked(false);

      const { subSections } =
        initialSelectedSubSubSectionInSubSection[0] as ISubSection;

      // eslint-disable-next-line no-return-assign, no-param-reassign
      subSections.forEach((ss) => (ss.isChecked = false));
      const updateSecChecked = {
        ...initialSelectedSubSubSectionInSubSection[0],
        subSections,
        selectAll: false,
      } as ISubSection;
      const updateIsCheckedSubSubSectionInSubSection: ISubSection[] =
        secSelected.map((latestIsChecked) =>
          latestIsChecked === initialSelectedSubSubSectionInSubSection[0]
            ? updateSecChecked
            : latestIsChecked
        );

      setSubSubUpdatedStatus(updateIsCheckedSubSubSectionInSubSection);
    }

    if (subValueSelected.length > 0) {
      const secSelected: ISubSection[] =
        subUpdatedStatus.length > 0 ? subUpdatedStatus : subOneGov;

      const initialSelectedSubSectionsInMain: ISubSection[] =
        secSelected.filter((sc) => sc.id === sectionValue.id);

      setAllSubSelectChecked(false);

      const { subSections } = initialSelectedSubSectionsInMain[0]!;

      // eslint-disable-next-line no-return-assign, no-param-reassign
      subSections.forEach((ss) => (ss.isChecked = false));
      const updateSecChecked: ISubSection = {
        ...initialSelectedSubSectionsInMain[0]!,
        subSections,
        selectAll: false,
      };
      const updateIsCheckedSubSectionInMain: ISubSection[] = secSelected.map(
        (latestIsChecked) =>
          latestIsChecked === initialSelectedSubSectionsInMain[0]
            ? updateSecChecked
            : latestIsChecked
      );

      setSubUpdatedStatus(updateIsCheckedSubSectionInMain);
    }

    // eslint-disable-next-line no-return-assign, no-param-reassign
    mainGov.forEach((sc) => (sc.isChecked = false));
    subOneGov.forEach((sub) => {
      sub.subSections.forEach((ss) => {
        // eslint-disable-next-line no-param-reassign
        ss.isChecked = false;
      });
    });
    subTwoGov.forEach((sub) => {
      sub.subSections.forEach((ss) => {
        // eslint-disable-next-line no-param-reassign
        ss.isChecked = false;
      });
    });
    setAllMainChecked(false);
    setAllSubSelectChecked(false);
    setAllSubSubSelectChecked(false);
    setMainValueSelected([]);
    setMainUpdatedStatus([]);
    setSubValueSelected([]);
    setSubUpdatedStatus([]);
    setSubSubValueSelected([]);
    setSubSubUpdatedStatus([]);
  };

  const submitHandler = () => {
    const sections = {
      SectionIDs: mainValueSelected,
      SubSectionIDs: subValueSelected,
      Sub_SubSectionIDs: subSubValueSelected,
    };

    // eslint-disable-next-line no-console
    console.log(sections);
  };

  const sectionRef = useRef<any>();

  useEffect(() => {
    const handle = (event: Event) => {
      if (!sectionRef.current?.contains(event.target as Node)) {
        setToggleDropdown(false);
        setToggleMainDropdown(false);
        setToggleSubDropdown(false);
        defaultValueHandler();
      } else setToggleDropdown(true);
    };

    document.addEventListener('mousedown', handle);
  }, []);

  onFixedScreen(toggleDropdown);

  return (
    // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
    <div className="z-20 flex w-[250px] flex-col">
      {toggleDropdown && (
        <div
          // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
          className={`
            absolute -mt-[720px] flex flex-row items-start 
            rounded-[10px] bg-white p-1 shadow-lg
          `}
          ref={sectionRef}
        >
          {/** show Section */}
          {toggleDropdown && (
            <div className="w-[200px] bg-white">
              <>
                <div
                  className="
                    flex h-[300px] flex-col border-0 border-b
                    border-solid border-greyOcare/50 pb-4
                  
                  "
                >
                  <div className="overflow-y-scroll">
                    <div className="flex flex-row items-center gap-1 p-2">
                      <RxMagnifyingGlass className="text-[20px] text-greyOcare/80" />
                      <input
                        type="search"
                        className="w-[90%] border-none p-1 text-[14px] outline-none"
                        placeholder="Search..."
                        onChange={changeMainHandler}
                      />
                    </div>
                    <div
                      className="
                        flex cursor-pointer flex-row items-center 
                        justify-between px-2 pb-2
                      "
                    >
                      <div
                        className="inline-flex w-[100%] items-center"
                        onClick={allMainValueHandler}
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-blueOcare"
                          readOnly
                          checked={allMainChecked}
                        />
                        <label className="ml-2 text-[12px]">ทุกหน่วยงาน</label>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 p-2">
                      <p className="text-[14px] text-greyOcare/70">หน่วยงาน</p>
                    </div>
                    {sectionSelectedSearchedHandler(
                      mainSelected as any,
                      mainSearched
                    ).map((gn) => (
                      <MainGovDropdown
                        key={gn.id}
                        gov={gn}
                        onMainSectionValueHandler={mainSectionValueHandler}
                        onToggleSubHandler={toggleSubHandler}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex w-[100%] flex-row gap-4 p-4">
                  <button
                    className="
                      w-[50%] cursor-pointer
                      rounded-[10px] border-2 border-solid border-blueOcare bg-white 
                      py-2 text-blueOcare
                    "
                    onClick={defaultValueHandler}
                  >
                    Default
                  </button>
                  <button
                    className={`
                    rounded-[10px] text-white
                      ${
                        mainValueSelected.length > 0 ||
                        subValueSelected.length > 0 ||
                        subSubValueSelected.length > 0
                          ? 'cursor-pointer border-blueOcare bg-blueOcare'
                          : 'cursor-not-allowed border-none bg-blueOcare/50'
                      } w-[50%] border-2 border-solid py-2 
                    `}
                    onClick={submitHandler}
                    disabled={
                      !(
                        mainValueSelected.length > 0 ||
                        subValueSelected.length > 0 ||
                        subSubValueSelected.length > 0
                      )
                    }
                  >
                    Confirm
                  </button>
                </div>
              </>
            </div>
          )}

          {toggleDropdown && sectionSelected && toggleMainDropdown && (
            <div className="w-[200px] bg-white">
              <>
                <div
                  className="
                    flex h-[300px] flex-col border-0 border-b
                    border-solid border-greyOcare/50 pb-4
                  
                  "
                >
                  <div className="overflow-y-scroll">
                    <div className="flex flex-row items-center gap-1 p-2">
                      <RxMagnifyingGlass className="text-[20px] text-greyOcare/80" />
                      <input
                        type="search"
                        className="w-[90%] border-none p-1 text-[14px] outline-none"
                        placeholder="Search..."
                        onChange={changeSubHandler}
                      />
                    </div>
                    <div
                      className="
                        flex cursor-pointer flex-row items-center 
                        justify-between px-2 pb-2
                      "
                      onClick={allSubSectionValueHandler}
                    >
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-blueOcare"
                          readOnly
                          checked={allSubSelectChecked}
                        />
                        <label className="ml-2 text-[12px]">ทุกหน่วยงาน</label>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 p-2">
                      <p className="text-[14px] text-greyOcare/70">หน่วยงาน</p>
                    </div>
                    {sectionSelectedSearchedHandler(
                      sectionSelected?.subSections,
                      subSearched
                    ).map((gn) => (
                      <SubOneGovC
                        key={gn.id}
                        gov={gn as any}
                        onMainSectionValueHandler={subSectionValueHandler}
                        onToggleSubSubHandler={toggleSubSubHandler}
                      />
                    ))}
                  </div>
                </div>
              </>
            </div>
          )}

          {toggleDropdown &&
            sectionSelected &&
            subSectionSelected &&
            toggleSubDropdown && (
              <div className="w-[200px] bg-white">
                <>
                  <div
                    className="
                      flex h-[300px] flex-col border-0 border-b
                      border-solid border-greyOcare/50 pb-4
                    
                    "
                  >
                    <div className="overflow-y-scroll">
                      <div className="flex flex-row items-center gap-1 p-2">
                        <RxMagnifyingGlass className="text-[20px] text-greyOcare/80" />
                        <input
                          type="search"
                          className="w-[90%] border-none p-1 text-[14px] outline-none"
                          placeholder="Search..."
                          onChange={changeSubSubHandler}
                        />
                      </div>
                      <div
                        className="
                          flex cursor-pointer flex-row items-center 
                          justify-between px-2 pb-2
                        "
                        onClick={allSubSubSectionValueHandler}
                      >
                        <div className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 accent-blueOcare"
                            readOnly
                            checked={allSubSubSelectChecked}
                          />
                          <label className="ml-2 text-[12px]">
                            ทุกหน่วยงาน
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-2 p-2">
                        <p className="text-[14px] text-greyOcare/70">
                          หน่วยงาน
                        </p>
                      </div>
                      {sectionSelectedSearchedHandler(
                        subSectionSelected?.subSections,
                        subSubSearched
                      ).map((gn) => (
                        <SubTwoGov
                          key={gn.id}
                          gov={gn as any}
                          onMainSectionValueHandler={
                            subSubmainSectionValueHandler
                          }
                        />
                      ))}
                    </div>
                  </div>
                </>
              </div>
            )}
        </div>
      )}
      <div className="w-full" onClick={toggleDropdownHandler}>
        <ButtonDropdown
          name="หน่วยงานหลักทั้งหมด"
          icon={toggleDropdown ? IoCaretDown : IoCaretUp}
          toggleDropdown={toggleDropdown}
        />
      </div>
    </div>
  );
};

export default GovernmentDropdown;
