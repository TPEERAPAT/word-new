import Button from '@components/Button/Button';
import LoadingCard from '@components/Card/LoadingCard';
import Chip from '@components/Chip/Chip';
import { ShowToast } from '@components/Toast/OcareToast';
import DisplayBox from '@components/Ui/DisplayBox';
import StatusDot from '@components/Ui/StatusDot';
import { useGetTagLibraryQuery } from '@redux/tagLibApi';
import type { FC } from 'react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { RiShieldCheckFill } from 'react-icons/ri';
import { LibraryToTag } from 'utils/PersonaUtil';

import ContactDropdownInput from './ContactDropdownInput';

interface DemographicCardProps {
  name: string;
  healthStatus: string;
  visits: number;
  birthDate: string;
  age: number;
  gender: string;
  nation: string;
  payer: string;
  thirdParty?: boolean;
}

const DemographicCard: FC<DemographicCardProps> = ({
  name = '',
  healthStatus = '',
  visits = 0,
  birthDate = '',
  age = 0,
  gender = '',
  nation = '',
  payer = '',
  thirdParty,
}) => {
  const { data, isLoading } = useGetTagLibraryQuery();

  if (isLoading) {
    return <LoadingCard />;
  }
  if (!data) {
    return <div>Error</div>;
  }

  const tagLibrary = LibraryToTag(data.data);

  const boxStyle = 'mb-3 inline-block w-[50%] max-w-[260px] lg:mb-6';
  const textStyle = 'pt-[2px] text-base font-medium';

  const DemgraphicDetail = () => (
    <div className="px-[18px] sm:px-6">
      <DisplayBox header="วัน-เดือน-ปีเกิด" divClassName={boxStyle}>
        <p className={textStyle}>
          {new Date(birthDate).toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
      </DisplayBox>

      <DisplayBox header="อายุ" divClassName={boxStyle}>
        <p className={textStyle}>{age} ปี</p>
      </DisplayBox>

      <DisplayBox header="เพศ" divClassName={boxStyle}>
        <p className={textStyle}>{gender}</p>
      </DisplayBox>

      {!thirdParty && (
        <DisplayBox header="เชื้อชาติ" divClassName={boxStyle}>
          <p className={textStyle}>{nation}</p>
        </DisplayBox>
      )}

      {!thirdParty && (
        <DisplayBox header="สิทธิการรักษา" divClassName={boxStyle}>
          <p className={textStyle}>{payer || '???'}</p>
        </DisplayBox>
      )}
    </div>
  );

  return (
    <div className="bg-white pb-[18px]">
      <div className="flex flex-col p-[18px] sm:p-6 xl:flex-row">
        {/* name and status */}
        <div className="mb-[6px] flex flex-col">
          <h1 className="text-xl font-medium">{name}</h1>
          <StatusDot
            color="orange"
            message={tagLibrary.HealthPriority[healthStatus].Value}
          />
        </div>

        {/* chips */}
        <div className="flex items-center gap-4">
          <Chip text={`${visits} Visits`} color="white" />
          <Chip
            text="Verified"
            color="green"
            bold
            startIcon={
              <RiShieldCheckFill size={12} className="fill-greenOcare" />
            }
          />
          {!thirdParty && (
            <div className="hidden h-[36px] w-[1px] bg-greyLightOcare sm:block" />
          )}
          {!thirdParty && <ContactDropdownInput />}
        </div>
      </div>
      <DemgraphicDetail />
      {!thirdParty && (
        <div className="px-[18px]">
          <Button
            type="outlined"
            size="full"
            startIcon={<FiSearch size={18} className="text-blueOcare" />}
            text="Personal Information"
            onClick={() => ShowToast('warning', 'Developing')}
          />
        </div>
      )}
    </div>
  );
};

export default DemographicCard;
