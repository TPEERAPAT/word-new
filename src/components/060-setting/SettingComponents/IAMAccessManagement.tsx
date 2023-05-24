import Button from '@components/Button/Button';
// import type { IIAMContext } from '@pages/setting';
// import { IAMContext } from '@pages/setting';
import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import { RiEdit2Line } from 'react-icons/ri';

// import { useContext, useState } from 'react';
import type { IIAMAcessManagementForm } from '../ConnectivitiesSideSetting/IAMForm/IAMForm';

interface IPatientDataCard {
  patientData: IIAMAcessManagementForm;
}

// eslint-disable-next-line unused-imports/no-unused-vars
const PatientDataCard: React.FC<Partial<IPatientDataCard>> = () => {
  // const { Service, UserData, UserObject, UserAcessibility } = patientData;{ patientData }
  const [toggleData, setToggleData] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-6 rounded-[10px] bg-greyRoundedOcare p-4">
      <div
        className={`
          flex flex-row items-center justify-between 
          border-0 ${toggleData && 'border-b'} border-solid 
          border-greySettingOcare/20 pb-4
        `}
      >
        <div className="flex flex-row items-center justify-start gap-4">
          <p
            className="
              rounded-[8px] bg-blueOcareHover p-1 
              text-blueOcare
            "
          >
            Hospital administrator
          </p>
          <div className="flex flex-col">
            <p className="font-medium">Johny Doe</p>
            <p>User ID : 00001</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-6">
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center">
              <input type="checkbox" className="h-5 w-5 accent-greyOcare/50" />
              <label className="ml-2">email@ocare.co.th</label>
            </div>
          </div>
          <div
            className="
              flex flex-row items-center justify-center 
              gap-2 border-0 border-r-2 border-solid
              border-greySettingOcare/20 pr-4
            "
          >
            <FiPhoneCall />
            <p>088-333-8888</p>
          </div>
          <div className="flex flex-row gap-4">
            <button
              className="
                flex cursor-pointer flex-row items-center
                justify-center gap-1 border-none bg-transparent
              "
            >
              <RiEdit2Line className="text-[20px] text-yellowLightOcare" />
              <p className="text-yellowLightOcare">Edit</p>
            </button>
            <button
              className="
                flex cursor-pointer flex-row items-center
                justify-center border-none bg-transparent
              "
            >
              <BsTrash className="text-[20px] text-redOcare/90" />
            </button>
          </div>
        </div>
      </div>
      {toggleData && (
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-start">
            <p className="text-greySettingOcare/30">User Objectives</p>
            <li>Public health</li>
            <li>Research</li>
            <li>Patient engagement</li>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-greySettingOcare/30">User Accessibility</p>
            <li>Patient discovery</li>
            <li>Health Dashboard</li>
            <li>Health Campaign</li>
            <li>Health Engagement</li>
            <li>Data Management</li>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-greySettingOcare/30">Access area restriction</p>
            <li>ST-01 (Section)</li>
            <li>Sst-02 (Sub-section)</li>
            <li>Ssst-03 (Sub-subsection)</li>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-greySettingOcare/30">Date added</p>
            <li>21 Jan 2023, 14:43</li>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-greySettingOcare/30">Invited by</p>
            <li>Admin Ocare</li>
          </div>
        </div>
      )}
      <button
        className="
          -m-4 flex cursor-pointer 
          flex-row items-center justify-center gap-2 
          rounded-b-[8px] border-none bg-greyOcare/10 p-1
        "
        onClick={() => setToggleData(!toggleData)}
      >
        {toggleData ? (
          <>
            <MdOutlineKeyboardArrowUp className=" text-[20px] font-bold text-greySettingOcare/40" />
            <p className="text-greySettingOcare/40">Show Less</p>
          </>
        ) : (
          <>
            <MdOutlineKeyboardArrowDown className=" text-[20px] font-bold text-greySettingOcare/40" />
            <p className="text-greySettingOcare/40">Show More</p>
          </>
        )}
      </button>
    </div>
  );
};

interface IIAMAccessManagement {
  onShowModal: Function;
  onServiceValue: Function;
}

const IAMAccessManagement: React.FC<IIAMAccessManagement> = ({
  onServiceValue,
  onShowModal,
}) => {
  const [toggleForm, setToggleForm] = useState<boolean>(false);

  // const { patientsData } = useContext<IIAMContext>(IAMContext);

  const toggleModalHandler = () => {
    // setToggleForm(!toggleForm);
    onServiceValue('IAM');
    onShowModal();
  };

  return (
    <div>
      {toggleForm ? (
        <div className="flex flex-col gap-6">
          <div className="flex flex-row justify-between">
            <div className="flex items-end">
              <p className="font-medium">Total : 3 Results</p>
            </div>
            <button
              className="
                flex w-[180px] cursor-pointer items-center justify-center
                gap-2 rounded-[8px] border border-solid border-blueOcare 
                bg-white py-3 text-[14px] text-blueOcare
              "
              onClick={toggleModalHandler}
            >
              <span className="font-semibold">+ </span>
              <p>I AM</p>
            </button>
          </div>
          <div className="flex flex-row gap-4">
            <button
              className="
                flex w-[21%] cursor-pointer 
                flex-row items-center justify-between rounded-[10px] border-2
                border-solid border-greySettingOcare/10 bg-transparent px-4 py-2
              "
            >
              <p>Service Role</p>
              <MdOutlineKeyboardArrowDown className=" text-[20px] font-bold text-greySettingOcare/40" />
            </button>
            <button
              className="
                flex w-[21%] cursor-pointer 
                flex-row items-center justify-between rounded-[10px] border-2
                border-solid border-greySettingOcare/10 bg-transparent px-4 py-2
              "
            >
              <p>User Accessibility</p>
              <MdOutlineKeyboardArrowDown className=" text-[20px] font-bold text-greySettingOcare/40" />
            </button>
            <button
              className="
                flex w-[21%] cursor-pointer 
                flex-row items-center justify-between rounded-[10px] border-2
                border-solid border-greySettingOcare/10 bg-transparent px-4 py-2
              "
            >
              <p>Access area restriction</p>
              <MdOutlineKeyboardArrowDown className=" text-[20px] font-bold text-greySettingOcare/40" />
            </button>
            <input
              type="text"
              className="
                flex w-[21%]  flex-row items-center justify-between rounded-[10px]
                border-none bg-greySettingOcare/10 p-2 px-4 outline-none
              "
              placeholder="Search"
            />
            <button
              className="
                flex w-[15%] cursor-pointer flex-row items-center justify-center
                gap-2 border-none bg-transparent px-4 py-2
              "
            >
              <p>Date added</p>
              <MdOutlineKeyboardArrowDown className=" text-[20px] font-bold text-greySettingOcare/40" />
            </button>
          </div>
          {/* preparing to add the patient data before submit
          {patientsData.map((patientData, index) => (
            <PatientDataCard key={index} patientData={patientData} />
          ))} */}
          <PatientDataCard />
          <PatientDataCard />
          <PatientDataCard />
        </div>
      ) : (
        <div
          className="
            flex flex-col items-center justify-center 
            gap-4 rounded-[8px] p-10
          "
        >
          <div
            className="
                flex h-10 w-10 items-center justify-center 
                rounded-[50%] border-4 border-solid border-greySettingOcare/10
              "
          >
            <p className="text-[25px] font-bold text-greySettingOcare/10">!</p>
          </div>
          <p>I AM not found</p>
          <button
            className="
              flex w-[180px] cursor-pointer items-center justify-center
              gap-2 rounded-[8px] border border-solid border-blueOcare 
              bg-white py-3 text-[14px] text-blueOcare
            "
            onClick={() => setToggleForm(!toggleForm)}
          >
            <span className="font-semibold">+ </span>
            <p>I AM</p>
          </button>
        </div>
      )}
      <div className="flex items-center justify-end gap-4 py-4">
        <button
          className="
            cursor-pointer rounded-[10px]
            border-2 border-solid border-greySettingOcare/10 bg-white 
            px-[100px] py-3
          "
        >
          Reset Default
        </button>
        <Button text="Submit" size="md" />
      </div>
    </div>
  );
};

export default IAMAccessManagement;
