import TagInput from '@components/023-persona/InputPersona/TagInput';
import Button from '@components/Button/Button';
import LoadingCard from '@components/Card/LoadingCard';
import PatientCard from '@components/Card/PatientCard';
import SearchInput from '@components/Input/SearchInput';
import Footer from '@components/Ui/Footer';
import PageHead from '@components/Ui/PageHead';
import { useGetTagLibraryQuery } from '@redux/tagLibApi';
import type { FC, KeyboardEvent } from 'react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { LibraryToTag } from 'utils/PersonaUtil';

import type { PatientData, SearchKeywordResult } from '#types/PatientProfile';

interface SearchResultProps {
  inputData: any;
  setInputData: Function;
  handleKeyDownEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleClickSearch: Function;
  isPageLoading: boolean;
  searchResults: SearchKeywordResult;
}

const SearchResult: FC<SearchResultProps> = ({
  inputData,
  setInputData,
  handleKeyDownEnter,
  handleClickSearch,
  isPageLoading,
  searchResults,
}) => {
  // get tag library
  const { data, isLoading } = useGetTagLibraryQuery();

  if (isLoading) {
    return (
      <div className="flex h-full flex-col">
        <PageHead title="Patient Profile" />
        <LoadingCard />
      </div>
    );
  }
  if (!data) {
    return <div>Error</div>;
  }

  const tagLibrary = LibraryToTag(data.data);

  function handlePatientClick(patientId: string) {
    window.location.href = `/health-summary/${patientId}`;
  }

  const Form = (
    <div className="flex items-center gap-3">
      <SearchInput
        placeholder="เลขที่บัตรประชาชน / ชื่อ-สกุล"
        value={inputData.idOrName}
        onChange={(event) =>
          setInputData({ ...inputData, idOrName: event.target.value })
        }
        onKeyDown={handleKeyDownEnter}
      />
      <TagInput placeholder="จังหวัด" />
      <TagInput placeholder="หน่วยงานหลัก" />
      <TagInput placeholder="หน่วยงานย่อย" />
      <div className="w-full">
        <div id="search-button" onClick={() => handleClickSearch()}>
          <Button
            text={`ค้นหารายชื่อ`}
            bold
            size="full"
            className="ml-auto"
            startIcon={<FiSearch className="text-white" size={16} />}
            shadow
            isLoading={isPageLoading}
          />
        </div>
      </div>
    </div>
  );

  const PatientName = (patient: PatientData) => {
    let NamePrefix: string;
    if (patient.PatientInfo.Gender === 'Male') {
      NamePrefix = 'นาย';
    } else if (patient.PatientInfo.Gender === 'Female') {
      NamePrefix = 'นางสาว';
    } else {
      NamePrefix = '';
    }
    return `${NamePrefix} ${patient.PatientInfo.FirstName} ${patient.PatientInfo.LastName}`;
  };

  const PatientHealthStatus = (patient: PatientData) => {
    if (patient.ClinicalInfo.HealthPriorityIDs.length === 0) {
      return 'no data';
    }
    const healthStatusUuid = patient.ClinicalInfo.HealthPriorityIDs[0];
    return tagLibrary.HealthPriority[healthStatusUuid].Value;
  };

  const eachPatient = searchResults.patientsData.map((patient, i: number) => {
    return (
      <div
        key={i}
        onClick={() => handlePatientClick(patient.uuid)}
        data-cy={`resultPatient${i}`}
      >
        <PatientCard
          name={PatientName(patient)}
          healthStatus={PatientHealthStatus(patient)}
          visits={patient.CountVisits}
          verify={true}
          cardID="????"
          birthDate={patient.PatientInfo.Birthdate}
          age={patient.PatientInfo.Age}
          gender={patient.PatientInfo.Gender}
          email={patient.PatientInfo.Email}
          tel={patient.PatientInfo.CellPhone}
          healthConditions={patient.ClinicalInfo.HealthConditionIDs}
          clinicalCaptures={patient.ClinicalInfo.ClinicalCaptureIDs}
          recommendedCampaign={[]}
          organizations={patient.DemographicInfo.Demographic.OrganizationID}
          addresses={[]}
          visitLocations={patient.DemographicInfo.VisitLocationIDs}
          payors={patient.DemographicInfo.Demographic.PayorIDs}
          tagLibrary={tagLibrary}
        />
      </div>
    );
  });

  return (
    <div className="flex h-full flex-col">
      <PageHead title="Patient Profile">{Form}</PageHead>
      {/* ---- search result ---- */}
      <div className="flex items-center gap-3 p-6">
        <p className="font-medium">{`${searchResults.CountPatients} ${
          searchResults.CountPatients > 1 ? 'Results' : 'Result'
        }`}</p>
        <div className="ml-auto flex cursor-pointer items-center">
          <p className="mr-3">สถานะ:</p>
          <GoPrimitiveDot />
          <p className="ml-[8px] mr-3">ทั้งหมด</p>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="flex flex-col gap-6 overflow-y-auto px-6">
        {isPageLoading ? <LoadingCard /> : eachPatient}
        <Footer />
      </div>
    </div>
  );
};

export default SearchResult;
