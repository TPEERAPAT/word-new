import TagInput from '@components/023-persona/InputPersona/TagInput';
import Button from '@components/Button/Button';
import Card from '@components/Card/Card';
import SearchInput from '@components/Input/SearchInput';
import ToggleSidebar from '@components/Ui/ToggleSidebar';
import type { FC } from 'react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

interface PatientPortalProps {
  inputData: any;
  setInputData: Function;
  handleKeyDownEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleClickSearch: Function;
  isLoading: boolean;
}

const PatientPortal: FC<PatientPortalProps> = ({
  inputData,
  setInputData,
  handleKeyDownEnter,
  handleClickSearch,
  isLoading,
}) => {
  return (
    <div className="flex min-h-[100vh] justify-center">
      <div className="absolute w-full">
        <ToggleSidebar />
      </div>
      <Card
        className="mx-4 my-auto w-full max-w-[937px] px-3 py-[18px] md:mx-9 md:p-12"
        shadow
      >
        <h1 className="mb-[18px] text-xl font-medium md:mb-8 md:text-5xl">{`Patient Portal`}</h1>
        <div className="mb-[18px] flex gap-0.5 md:mb-8">
          <div className="h-0.5 w-16 bg-blueOcare" />
          <div className="h-0.5 w-16 bg-redOcare" />
        </div>
        <div className="flex flex-col gap-[30px]">
          <SearchInput
            type={'outlined'}
            placeholder="เลขที่บัตรประชาชน / ชื่อ-สกุล"
            value={inputData.idOrName}
            onChange={(e) =>
              setInputData({ ...inputData, idOrName: e.target.value })
            }
            onKeyDown={handleKeyDownEnter}
          />
          <div className="mb-[18px] flex w-full flex-col gap-[18px] md:mb-8 lg:flex-row">
            <TagInput placeholder="จังหวัด" />
            <TagInput placeholder="หน่วยงานหลัก" />
            <TagInput placeholder="หน่วยงานย่อย" />
          </div>
        </div>
        <div id="search-button" onClick={() => handleClickSearch()}>
          <Button
            text={`ค้นหารายชื่อ`}
            bold
            size="full"
            startIcon={<FiSearch className="text-white" size={16} />}
            shadow
            isLoading={isLoading}
          />
        </div>
      </Card>
    </div>
  );
};

export default PatientPortal;
