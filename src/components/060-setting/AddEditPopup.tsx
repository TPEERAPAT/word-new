import Button from '@components/Button/Button';
import Card from '@components/Card/Card';
import TextInput from '@components/Input/TextInput';
import type { FC } from 'react';
import React, { useState } from 'react';

type ServiceType =
  | 'Hospital administrator'
  | 'Data administrator'
  | 'Service member';

const ServiceList: ServiceType[] = [
  'Hospital administrator',
  'Data administrator',
  'Service member',
];
const SectionList: string[] = ['BDMS', 'Province1', 'Hospital2'];
const SubSectionList: string[] = [
  'MNCM',
  'BDMS Pediatric',
  'VIHBA Dermatology',
];
const SubSubSectionList: string[] = [
  'BDMSPedia 12',
  'VIHBHADerma 3521',
  'MNCM 110',
];

type UserObjType = 'Public health' | 'Research' | 'Patient engagement';
const UserObjList: UserObjType[] = [
  'Public health',
  'Research',
  'Patient engagement',
];

interface AddEditPopupProps {
  hidePopup: () => void;
}

const AddEditPopup: FC<AddEditPopupProps> = ({ hidePopup }) => {
  const [inputData, setInputData] = useState({
    Service: 'Hospital administrator' as ServiceType,
    FistName: '' as string,
    LastName: '' as string,
    Email: '' as string,
    Telephone: '' as string,
    Section: '' as string,
    SubSection: '' as string,
    SubSubSection: '' as string,
    UserObjective: '' as UserObjType,
  });

  const LeftInput = (
    <div>
      <h3>{`Service`}</h3>
      <select
        value={inputData.Service}
        onChange={(e) =>
          setInputData({ ...inputData, Service: e.target.value as ServiceType })
        }
      >
        {ServiceList.map((service, i) => (
          <option key={i} value={service}>
            {service}
          </option>
        ))}
      </select>
      <h3>{`First Name`}</h3>
      <TextInput
        value={inputData.FistName}
        onChange={(e: any) =>
          setInputData({ ...inputData, FistName: e.target.value })
        }
        height={0}
      />
      <h3>{`Last Name`}</h3>
      <TextInput
        value={inputData.LastName}
        onChange={(e: any) =>
          setInputData({ ...inputData, LastName: e.target.value })
        }
        height={0}
      />
      <h3>{`Email`}</h3>
      <TextInput
        value={inputData.Email}
        onChange={(e: any) =>
          setInputData({ ...inputData, Email: e.target.value })
        }
        height={0}
      />
      <h3>{`Telephone (Optional)`}</h3>
      <TextInput
        value={inputData.Telephone}
        onChange={(e: any) =>
          setInputData({ ...inputData, Telephone: e.target.value })
        }
        height={0}
      />
      <h3>{`Access area restriction`}</h3>
      <select
        value={inputData.Section}
        onChange={(e) =>
          setInputData({ ...inputData, Section: e.target.value })
        }
      >
        {SectionList.map((section, i) => (
          <option key={i} value={section}>
            {section}
          </option>
        ))}
      </select>
      <select
        value={inputData.SubSection}
        onChange={(e) =>
          setInputData({ ...inputData, SubSection: e.target.value })
        }
      >
        {SubSectionList.map((subSection, i) => (
          <option key={i} value={subSection}>
            {subSection}
          </option>
        ))}
      </select>
      <select
        value={inputData.SubSubSection}
        onChange={(e) =>
          setInputData({ ...inputData, SubSubSection: e.target.value })
        }
      >
        {SubSubSectionList.map((subSubSection, i) => (
          <option key={i} value={subSubSection}>
            {subSubSection}
          </option>
        ))}
      </select>
      <h3>{`User objective`}</h3>
      <div>
        {/* create radio input of UserObjList */}
        {UserObjList.map((userObj, i) => (
          <div key={i}>
            <input
              type="radio"
              // id={userObj}
              name="userObjective"
              value={userObj}
              checked={inputData.UserObjective === userObj}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  UserObjective: e.target.value as UserObjType,
                })
              }
            />
            <label htmlFor={userObj}>{userObj}</label>
          </div>
        ))}
      </div>
    </div>
  );

  const SubmitButton = (
    <div className="flex justify-between">
      {/* eslint-disable-next-line no-console */}
      <Button onClick={() => console.log('save')} text="save" />
      {/* eslint-disable-next-line no-console */}
      <Button onClick={() => console.log('delete')} text="delete" />
    </div>
  );

  return (
    <>
      <div className="relative flex h-screen w-full">
        <div className="fixed top-0 z-50 flex h-screen w-full items-center justify-center bg-greyOcare/80">
          {/* <div className="flex w-full h-full absolute bg-greyOcare/80 z-50"> */}
          <Card className="max-h-[550px] max-w-[1034px] p-3 sm:p-6" shadow>
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-6">
                <h2 className="leading-none	">{`Add / Edit`}</h2>
                <div>{`Verify`}</div>
              </div>
              <p
                className="cursor-pointer pr-1 text-lg font-bold leading-none text-greyOcare"
                onClick={hidePopup}
              >
                X
              </p>
            </div>
            <div>{LeftInput}</div>
            {SubmitButton}
          </Card>
        </div>
      </div>
    </>
  );
};

export default AddEditPopup;
