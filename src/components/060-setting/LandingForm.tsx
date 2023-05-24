import Button from '@components/Button/Button';
import TextInput from '@components/Input/TextInput';
import React, { useState } from 'react';

import Navbar from '../navbar/Navbar';
import AddEditPopup from './AddEditPopup';
import ShortHeadsection from './ShortHeadSection';

const Setting = () => {
  const [addEditPopup, setAddEditPopup] = useState<boolean>(false);

  function showAddEditPopup() {
    setAddEditPopup(true);
  }

  function hideAddEditPopup() {
    setAddEditPopup(false);
  }

  const IAM_DATA = [
    {
      Service: 'Hospital administrator',
      Email: 'Jo@ocare.co.th',
      Name: 'Hulala',
      DateAdded: '21 January 2023',
      InvitedBy: 'Ocare Technician',
    },
    {
      Service: 'Data administrator',
      Email: 'Jojo_Diohead_theWorld@ocare.co.th',
      Name: 'โบตั๋น',
      DateAdded: '11 April 2022',
      InvitedBy: 'Hulala',
    },
    {
      Service: 'Service member',
      Email: 'JoStar@ocare.co.th',
      Name: 'อครวรศิลป์ ณ นิวเจอร์ซี่ วอเตอร์ลู',
      DateAdded: '4 May 2021',
      InvitedBy: 'สุรนารีกุล สกุลมหามณีปราสาททอง',
    },
  ];

  function getMemberList(dataName: string) {
    return IAM_DATA.map((data: any, i: number) => {
      return (
        <p
          key={i}
          className="mb-1.5 max-w-[170px] truncate text-sm font-normal text-greyOcare"
        >
          {data[dataName]}
        </p>
      );
    });
  }

  const IAM = () => {
    return (
      <div className="gap-24 p-6 md:flex">
        <div className="w-full max-w-[346px]">
          <ShortHeadsection label={`IAM (Access Management)`} />
        </div>
        {/* Member */}
        <div className="flex flex-col">
          <div className="flex gap-3">
            <div>
              <h3 className="mb-1.5 text-sm font-medium">{`Service`}</h3>
              {getMemberList('Service')}
            </div>
            <div>
              <h3 className="mb-1.5 text-sm font-medium">{`Email`}</h3>
              {getMemberList('Email')}
            </div>
            <div>
              <h3 className="mb-1.5 text-sm font-medium">{`Name`}</h3>
              {getMemberList('Name')}
            </div>
            <div>
              <h3 className="mb-1.5 text-sm font-medium">{`Date added`}</h3>
              {getMemberList('DateAdded')}
            </div>
            <div>
              <h3 className="mb-1.5 text-sm font-medium">{`Invited by`}</h3>
              {getMemberList('InvitedBy')}
            </div>
          </div>
          <div
            className="mb-3 max-w-[50px] cursor-pointer text-sm font-medium active:font-bold"
            onClick={() => showAddEditPopup()}
          >
            + add
          </div>
          <Button text="Save" size="sm" />
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar activeNav="Setting">
        <div className="mb-3 flex flex-col pl-[240px] sm:mb-6">
          {/* head */}
          <div className="flex flex-col bg-white p-3 shadow-lg sm:p-6">
            <h1 className="font-bold max-sm:text-2xl">
              {`Oraganization setting up`}
            </h1>
          </div>

          {/* General information */}
          <div className="max-w-[760px] gap-24 p-6 md:flex">
            <div className="w-full">
              <ShortHeadsection label={`General information`} />
            </div>
            {/* form */}
            <div className="flex max-w-[270px] flex-col md:min-w-[270px]">
              <div className="mb-3">
                <p className="text-sm font-medium">{`Organiztion name (English)`}</p>
                <TextInput value="" onChange={() => {}} height={0} />
              </div>
              <div className="mb-3">
                <p className="text-sm font-medium">{`ชื่อองค์กร (ภาษาไทย)`}</p>
                <TextInput value="" onChange={() => {}} height={0} />
              </div>
              <div className="mb-3">
                <p className="text-sm font-medium">
                  {`Hospital logo (Size 400 x 400 px, maximum 200 kb)`}
                </p>
                <TextInput value="" onChange={() => {}} height={0} />
              </div>
              <Button text="Save" size="sm" />
            </div>
          </div>

          {/* Connectivities */}
          <div className="max-w-[760px] gap-24 p-6 md:flex">
            <div className="w-full">
              <ShortHeadsection label={`Connectivities`} />
            </div>
            {/* form */}
            <div className="flex max-w-[270px] flex-col md:min-w-[270px]">
              <div className="mb-3">
                <p className="text-sm font-medium">{`API configurations`}</p>
                <TextInput value="" onChange={() => {}} height={0} />
              </div>
              <div className="mb-6">
                <TextInput value="" onChange={() => {}} height={0} />
              </div>
              <div className="mb-3">
                <div className="flex text-sm font-medium">
                  {`Whitelist IP`}
                  {/* limit checkbox */}
                  <div className="ml-auto flex gap-1.5">
                    <div className="h-4 w-4 cursor-pointer rounded-sm border border-solid border-[#D1D1D6] bg-white" />
                    <p>limited</p>
                  </div>
                </div>
                <TextInput value="" onChange={() => {}} height={0} />
              </div>
              <div className="mb-3 max-w-[50px] cursor-pointer text-sm font-medium active:font-bold">
                + add
              </div>
              <Button text="Save" size="sm" />
            </div>
          </div>
          {IAM()}
        </div>
        {/* --- add / edit popup --- */}
        {addEditPopup && <AddEditPopup hidePopup={hideAddEditPopup} />}
      </Navbar>
    </>
  );
};

export default Setting;
